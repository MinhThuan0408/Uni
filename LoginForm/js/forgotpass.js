// function ValidateEmail(){
//     var email = document.getElementsByName("validateEmail");
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     alert('now');
//     if(email.value.match(mailformat))
//     {
//         return true;
//     }
//     else
//     {
//         alert("You have entered an invalid email address!");
//         email.focus();
//         return false;
//     }
// }
$(document).on('click', '.check', function() {
    var email = $(".validateEmail");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
});