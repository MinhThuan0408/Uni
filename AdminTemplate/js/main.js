//click show left_nav trên pc
$(document).ready(function () {
    $(".menu_show").click(function () {
        document.body.classList.toggle('sidebar-expand')
        // $('body').toggle('sidebar-expand')
    });

});



//list item in left_nav
$(document).ready(function () {
    $(".clickDrop").click(function() {
        $(this).parent().addClass('active').find('.left_nav--biglist').slideToggle();
        $(".clickDrop").not(this).parent().removeClass('active').find('.left_nav--biglist').slideUp();
      });
});


//show left_nav khi click icon 3 gạch và đổi thành dấu X tr
$(document).ready(function () {
    $(".showMobileIcon").click(function () {
        $('.left_nav').toggleClass('show-sidebar');
        $(this).toggleClass("la-times");
    });
    // function(){$('.left_nav').css({"left": "-260px"});},
    // function(){$('.left_nav').css({"left": "0"});}
});

