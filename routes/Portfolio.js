var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var imagePreuve = document.getElementById("imagePreuve");


function affichePreuve(nom){
    modal.style.display = "block";
    imagePreuve.innerHTML = "<img src='preuves/" + nom + ".JPG' alt='Preuve " + nom + "'>";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
