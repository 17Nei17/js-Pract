
function PictureLoad (method,data,headers) {
    fetch ('https://intern-staging.herokuapp.com/api/file' , {
        method:method,
        body:data,
        headers:headers,  
    }).then(
        resp => resp.json()
    ).then(
        json => console.log(json),
    );
}
var forme = document.forms.namedItem('fileinfo') ;
    forme.addEventListener ('submit' , function(ev) {
    var formData = new FormData(this);
    formData.append('parentEntityId', '5d35ef5608d39b00048a139a');
    var tokenStr=localStorage.getItem('token');
    PictureLoad('POST',formData, {'token' : tokenStr});
   ev.preventDefault();
})
