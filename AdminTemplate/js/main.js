//click show left_nav trên pc
$(document).ready(function () {
    $(".menu_show").click(function () {
        $('body').toggleClass('sidebar-expand')
        //$('.left_nav').toggleClass('show-sidebar');
       
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
        $('.left_nav').toggleClass('show-sidebar-on-mobile');
        $(this).toggleClass("la-times");
    });
});

