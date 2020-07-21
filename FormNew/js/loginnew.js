$(document).on('click', '.toggle-password', function() {
    
    $(this).toggleClass("la-eye la-eye-slash");
    
    var input = $(".loginBlock__inputPWBox");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});

