//BARA DE PROGRESO
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


//LINEA DE TIEMPO
function openPopup(title, content) {
    document.getElementById("popup-title").innerHTML = title;
    document.getElementById("popup-content").innerHTML = content;
    document.getElementById("popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }