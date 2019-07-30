// получает список просто в консоль
localStorage.removeItem('token');
document.getElementById('logout').style.visibility="hidden";
//document.getElementById('form3').style.visibility="hidden";
var login = document.getElementById('login');
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
                    localStorage.setItem ('token',json.token ); // хранит полученный токен
                   // document.getElementById('form').style.visibility="hidden";
                    document.getElementById('logout').style.visibility="visible";
                   // document.getElementById('form3').style.visibility="visible";
                    
                }
               // else alert ('не верные данные');
        }
    )
};
 function valid (form) {
    var newEmail={ email: 'какой то эмейл' }; 
         newEmail.email=form.name.value;
    var newPassword={ password: 'какой то пароль' }; 
         newPassword.password=form.password.value;
    var SignIn = Object.assign(newEmail, newPassword);
// email: neiteru@gmail.com', password: 'VoY5xi'
  doRequest (SignIn);
  var Token = localStorage.getItem('token'); //
   }
//////////////////////////////////////////////////////////////////////////////
// регистрация и активация (ужасно сделана, работает но надо написать в разы короче)
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
                        localStorage.setItem ('ID',json._id);
                        console.log (json); 
                     }   
                    else {
                        console.log(json);
                }
            }
        )
        .then(
            json => {
                if (url=='https://intern-staging.herokuapp.com/api/identification/' ){
                  var  url = url + 'activate'; 
                  var  method = 'POST';
                }
              //  if(json.error) alert('ошибка');
            } 
        )
    };
    function doRequest4 (data){
        fetch ("https://intern-staging.herokuapp.com/api/identification/activate", {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                "Content-type":"application/json",
            },
        }).then(
            resp=>resp.json()
            ).then(
                json => {
                    console.log (json);   
                }
            )
        };
 function valid2 (form2) {
        var newEmail={ email: 'какой то эмейл' }; 
         newEmail.email=form2.name2.value;
// email: neiteru@gmail.com', password: 'VoY5xi'
        doRequest2 (newEmail);
       var newID={ id: 'какой то эмейл' }; 
       newID.id=localStorage.getItem('ID');
        doRequest4 (newID);
   }
///////////////////////////////////////////////////////////////////////////
