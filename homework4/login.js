// получает список просто в консоль
document.getElementById('logout').style.visibility="hidden";
var login = document.getElementById('login');
console.log (login)
login.addEventListener ('click', function(event){
    doRequest3 ()
})
function doRequest3 (data){
    fetch ("https://intern-staging.herokuapp.com/api/identification", {
        method:'GET',
      //  body: JSON.stringify(data),
        headers:{
            "Content-type":"application/json",
        },
    }).then(
        resp=>resp.json()
    ).then (
        json=>console.log (json)
    );
}
/////////////////////////////////////////////////////////////////////////////
//логин, вход уже по созданному паролю  и почте
function doRequest (data){
    fetch ("https://intern-staging.herokuapp.com/api/identification/sign_in", {
        method:'POST',
        body: JSON.stringify(data),
        headers:{
            "Content-type":"application/json",
        },
    }).then(
        resp=>resp.json()
    ).then (
        json => {
                if (json.token) {
                    console.log (json); 
                    tokenStr=json.token;
                     
                    document.getElementById('form').style.visibility="hidden";
                    document.getElementById('logout').style.visibility="visible";
                    
                }
               // else alert ('не верные данные');
        }
    )
 return tokenStr;
};
 function valid (form) {
    var newEmail={ email: 'какой то эмейл' }; 
         newEmail.email=form.name.value;
    var newPassword={ password: 'какой то пароль' }; 
         newPassword.password=form.password.value;
    var SignIn = Object.assign(newEmail, newPassword);
// email: neiteru@gmail.com', password: 'VoY5xi'
  doRequest (SignIn);
   }
//////////////////////////////////////////////////////////////////////////////
// регистрация и активация
let tokenStr;
let url ='https://intern-staging.herokuapp.com/api/identification/'
let method = 'POST';

function doRequest2 (data){
    fetch (url, {
        method: method,
        body: JSON.stringify(data),
        headers:{
            "Content-type":"application/json",
        },
    }).then(
        resp=>resp.json()
        ).then(
            json => {
                if (json.error)  alert('ошибка регистрации'); 
                //это явно не работает
                   if (json._id) {
                        tokenStr = json._id;
                        alert(tokenStr); 
                         url = url + '/activate';
                         method = 'POST'
                        doRequest2 (tokenStr);
                        alert('на почту выслано письмо с паролем'); }   
                    else {
                        console.log(json);
                }
               
            }
        )
    };
  
 function valid2 (form2) {
        var newEmail={ email: 'какой то эмейл' }; 
         newEmail.email=form.name.value;
// email: neiteru@gmail.com', password: 'VoY5xi'
  doRequest2 (newEmail);
   }

///////////////////////////////////////////////////////////////////////////
//отправка картинок
document.getElementById('form3').style.visibility="hidden";
//document.getElementById('logout').style.visibility="visible";
