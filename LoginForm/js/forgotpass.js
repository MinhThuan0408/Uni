function ValidateEmail(){
    var email = document.getElementsByClassName("validateEmail");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}
