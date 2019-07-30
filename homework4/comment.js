var comment = document.getElementById('comment');
comment.addEventListener ('click', function(event){
    var text={ message: 'текст' ,"parentId": "2020327"}; 
    text.message=comments.value;
    var tokenStr=localStorage.getItem('token');
    console.log (tokenStr);
    doComments (text, tokenStr);
})
function doComments (data,token){
    fetch ("https://intern-staging.herokuapp.com/api/comment", {
        method:'POST',
       body: JSON.stringify(data),
        headers:{
            "Content-type":"application/json",
            'token':token
        },
    }).then(
        resp=>resp.json()
    ).then (
        json=>console.log (json)
    );
}

var allcomment = document.getElementById('allcomment');
allcomment.addEventListener ('click', function(event){
    var tokenStr=localStorage.getItem('token');
    doComments2 (tokenStr);
})
function doComments2 (token){
    fetch ("https://intern-staging.herokuapp.com/api/comment", {
        method:'GET',
     //  body: JSON.stringify(data),
        headers:{
            "Content-type":"application/json",
            'token':token
        },
    }).then(
        resp=>resp.json()
    ).then (
        json=>console.log (json)
    );
}