//click show left_nav trên pc
$(document).ready(function () {
    $(".menuSidebar").click(function () {
        $('body').toggleClass('sidebar-expand')
        //$('.left_nav').toggleClass('show-sidebar');

    });
});



//list item in left_nav
$(document).ready(function () {
    $(".clickDrop").click(function () {
        $(this).parent().addClass('active').find('.left_nav--big_list').slideToggle();
        $(".clickDrop").not(this).parent().removeClass('active').find('.left_nav--big_list').slideUp();
    });
});


//show left_nav khi click icon 3 gạch và đổi thành dấu X tr
$(document).ready(function () {
    $(".showMobileIcon").click(function () {
        $('.left_nav').toggleClass('show-sidebar-on-mobile');
        $(this).toggleClass("la-times");
    });
});


//show expand màn hình 991
var windowsize = $(window).width();

$(window).resize(function () {
    windowsize = $(window).width();
    if (windowsize >= 992) {
        //Nếu màn hình nhỏ or bằng 992px thì xóa class sidebar-expand
        $('body').removeClass('sidebar-expand')
    }
    if (windowsize <= 991) {
        //Nếu màn hình nhỏ or bằng 991px thì add class sidebar-expand
        $('body').addClass('sidebar-expand')
    }
    if (windowsize <= 767) {
        //Nếu màn hình nhỏ or bằng 767px thì xóa class sidebar-expand
        $('body').removeClass('sidebar-expand')
    }
});


///hover expand
// $(document).ready(function () {
//     $(".left_nav").hover(function () {
//         if ($("body").hasClass('sidebar-expand')) {
//             $("body").toggle('sidebar-expand')
//             $('.left_nav').css('position', 'absolute');
//         }
//     })
// });
