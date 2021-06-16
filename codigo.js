let correo = document.getElementById("email")
function cogercorreo(){
    correo = document.getElementById("email").value;
    document.cookie = "email="+correo+"";
}
correo.addEventListener("blur", cogercorreo);
