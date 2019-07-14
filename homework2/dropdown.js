function Drop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  var button2 = document.querySelector ('#D1')
  button2.addEventListener("click", Drop);

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 