var modal = document.getElementById('mymodal');
var btn = document.getElementById('btn_modal_window');
var close = document.getElementById('close_modal_window');
console.log (close)
btn.onclick = function (){
    modal.style.display = 'block';
}

close.onclick = function (){
    modal.style.display = 'none';
}
window.onclick = function (event){
    if (event.target == modal){
        modal.style.display = 'none';
    }
}