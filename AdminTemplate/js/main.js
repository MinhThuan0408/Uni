//click show left_nav trên pc
$(document).ready(function () {
    $(".menuSidebar").click(function () {
        $('body').toggleClass('sidebar_expand')
        $('body').toggleClass('hideDarkLogo')
    });
});

//css class custome_active (background,color...) + active big-list
$(document).ready(function () {
    $('.clickDrop').click(function () {
        $(".clickDrop").removeClass('custome_active').not(this).parent().removeClass('active').find('.left_nav--big_list').slideUp();
        $(this).addClass('custome_active').parent().addClass('active').find('.left_nav--big_list').slideToggle();
    });
});

//show left_nav khi click icon 3 gạch và đổi thành dấu X tr
$(document).ready(function () {
    $(".showMobileIcon").click(function () {
        $('.left_nav').toggleClass('show-sidebar-on-mobile');
        $(this).toggleClass("la-times");
    });
});
//

//show expand màn hình 991
var windowsize = $(window).width();
$(window).resize(function () {
    windowsize = $(window).width();
    if (windowsize >= 992) {
        //Nếu màn hình nhỏ or bằng 992px thì xóa class sidebar_expand
        $('body').removeClass('sidebar_expand')
    }
    if (windowsize <= 991) {
        //Nếu màn hình nhỏ or bằng 991px thì add class sidebar_expand
        $('body').addClass('sidebar_expand')
    }
    if (windowsize <= 767) {
        //Nếu màn hình nhỏ or bằng 767px thì xóa class sidebar_expand
        $('body').removeClass('sidebar_expand')
    }
});
//hover dung JQuery
//hover expand
// $(document).ready(function () {
//     $(".left_nav").mouseover(function () {
//         if( $('body').hasClass(('sidebar_expand'))){
//             $('body').removeClass('sidebar_expand');
//             // $('.left_nav').css('positon','absolute');
//         }
//     })
//     $(".left_nav").mouseleave(function () {
//         $('body').addClass('sidebar_expand');
//         $('.left_nav').css('positon','absolute;');
//     })
// });


///hover show logo
// $(document).ready(function () {
//     $(".left_nav").hover(function () {
//         $('.top_nav--logo_both').addClass('expandLogo');
//     });
// });

//show menu treen mobile
$(document).ready(function () {
    $(".top_nav--icon_three_dot").click(function () {
        if (windowsize <= 767) {
            $('body .top_nav--mobile').toggleClass('showww');
            $('body .top_nav--mobile').removeClass('show');
        }
        else{
            $('body .top_nav--mobile .collapse').addClass('show');
        }
    });
});

//show bảng màu
$(document).ready(function () {
    $(".setting_color").click(function () {
        $('.setting_color').toggleClass('showSettingColor');
    });
});


//đổi màu header bg 
function changeHeadrBg(color) {
    //CÁCH 1 - không xử lí đc logo dark khi đổi màu color_bg6
    // $(".top_nav").css("background", color);
    // $(".left_nav").css("background", color);
    // $(".top_nav--search").css("background", color);
    // if (color == '#f2f6fb') {

    //     $(".top_nav--item").css("color", "black");
    //     $(".left_nav--name").css("color", "black");
    //     $(".left_nav--extend td").css("color", "black");
    //     $(".line").css("background", "black");

    //     $(".logoDark").css("display", "block");
    //     $(".logoLight").css("display", "none");
    // }
    // else {
    //     $(".top_nav--item").css("color", "white");
    //     $(".left_nav--name").css("color", "white");
    //     $(".left_nav--extend td").css("color", "white");
    //     $(".line").css("background", "white");

    //     $(".logoLight").css("display", "block");
    //     $(".logoDark").css("display", "none");
    // }

    //CÁCH 2

    if (color == '#3f50f6') {
        $('body').addClass('headerColorBg1 ');
        $('body').removeClass('headerColorBg2');
        $('body').removeClass('headerColorBg3');
        $('body').removeClass('headerColorBg4');
        $('body').removeClass('headerColorBg5');
        $('body').removeClass('headerColorBg6');

    }
    if (color == '#fe5419') {
        $('body').addClass('headerColorBg2 ');
        $('body').removeClass('headerColorBg1');
        $('body').removeClass('headerColorBg3');
        $('body').removeClass('headerColorBg4');
        $('body').removeClass('headerColorBg5');
        $('body').removeClass('headerColorBg6');
    }
    if (color == '#00b0ff') {
        $('body').addClass('headerColorBg3 ');
        $('body').removeClass('headerColorBg1');
        $('body').removeClass('headerColorBg2');
        $('body').removeClass('headerColorBg4');
        $('body').removeClass('headerColorBg5');
        $('body').removeClass('headerColorBg6');
    }
    if (color == '#6659f7') {
        $('body').addClass('headerColorBg4 ');
        $('body').removeClass('headerColorBg1');
        $('body').removeClass('headerColorBg2');
        $('body').removeClass('headerColorBg3');
        $('body').removeClass('headerColorBg5');
        $('body').removeClass('headerColorBg6');
    }
    if (color == '#1d2e42') {
        $('body').addClass('headerColorBg5 ');
        $('body').removeClass('headerColorBg1');
        $('body').removeClass('headerColorBg2');
        $('body').removeClass('headerColorBg3');
        $('body').removeClass('headerColorBg4');
        $('body').removeClass('headerColorBg6');
    }
    if (color == '#f2f6fb') {
        $('body').addClass('headerColorBg6 ');
        $('body').removeClass('headerColorBg1');
        $('body').removeClass('headerColorBg2');
        $('body').removeClass('headerColorBg3');
        $('body').removeClass('headerColorBg4');
        $('body').removeClass('headerColorBg5');
    }
}


//đổi màu leftnav bg
//CÁCH 1
// function changeLeftNavBg(color) {
//     $(".left_nav--list_tool").css("background", color);
//     $(".left_nav--list_tool").css("color", "white");
//     if (color == '#f2f6fb') {
//         $(".left_nav--list_tool").css("color", "black");

//     }
//     else {
//         $(".left_nav--list_tool").css("color", "white");
//     }
// }
//cách 2
function changeLeftNavBg(color) {
    if (color == '#3f50f6') {
        $('body').addClass('listToolColorBg1 changeBgActivee1');
        $('body').removeClass('listToolColorBg2');
        $('body').removeClass('listToolColorBg3');
        $('body').removeClass('listToolColorBg4');
        $('body').removeClass('listToolColorBg5');
        $('body').removeClass('listToolColorBg6');

        $('body').removeClass('changeBgActivee2');
        $('body').removeClass('changeBgActivee3');
        $('body').removeClass('changeBgActivee4');
        $('body').removeClass('changeBgActivee5');
        $('body').removeClass('changeBgActivee6');

    }
    if (color == '#fe5419') {
        $('body').addClass('listToolColorBg2 changeBgActivee2');
        $('body').removeClass('listToolColorBg1');
        $('body').removeClass('listToolColorBg3');
        $('body').removeClass('listToolColorBg4');
        $('body').removeClass('listToolColorBg5');
        $('body').removeClass('listToolColorBg6');

        $('body').removeClass('changeBgActivee1');
        $('body').removeClass('changeBgActivee3');
        $('body').removeClass('changeBgActivee4');
        $('body').removeClass('changeBgActivee5');
        $('body').removeClass('changeBgActivee6');
    }
    if (color == '#00b0ff') {
        $('body').addClass('listToolColorBg3 changeBgActivee3');
        $('body').removeClass('listToolColorBg1');
        $('body').removeClass('listToolColorBg2');
        $('body').removeClass('listToolColorBg4');
        $('body').removeClass('listToolColorBg5');
        $('body').removeClass('listToolColorBg6');

        $('body').removeClass('changeBgActivee1');
        $('body').removeClass('changeBgActivee2');
        $('body').removeClass('changeBgActivee4');
        $('body').removeClass('changeBgActivee5');
        $('body').removeClass('changeBgActivee6');
    }
    if (color == '#6659f7') {
        $('body').addClass('listToolColorBg4 changeBgActivee4');
        $('body').removeClass('listToolColorBg1');
        $('body').removeClass('listToolColorBg2');
        $('body').removeClass('listToolColorBg3');
        $('body').removeClass('listToolColorBg5');
        $('body').removeClass('listToolColorBg6');

        $('body').removeClass('changeBgActivee1');
        $('body').removeClass('changeBgActivee2');
        $('body').removeClass('changeBgActivee3');
        $('body').removeClass('changeBgActivee5');
        $('body').removeClass('changeBgActivee6');
    }
    if (color == '#1d2e42') {
        $('body').addClass('listToolColorBg5 changeBgActivee5');
        $('body').removeClass('listToolColorBg1');
        $('body').removeClass('listToolColorBg2');
        $('body').removeClass('listToolColorBg3');
        $('body').removeClass('listToolColorBg4');
        $('body').removeClass('listToolColorBg6');

        $('body').removeClass('changeBgActivee1');
        $('body').removeClass('changeBgActivee2');
        $('body').removeClass('changeBgActivee3');
        $('body').removeClass('changeBgActivee4');
        $('body').removeClass('changeBgActivee6');
    }
    if (color == '#f2f6fb') {
        $('body').addClass('listToolColorBg6 changeBgActivee6');
        $('body').removeClass('listToolColorBg1');
        $('body').removeClass('listToolColorBg2');
        $('body').removeClass('listToolColorBg3');
        $('body').removeClass('listToolColorBg4');
        $('body').removeClass('listToolColorBg5');

        $('body').removeClass('changeBgActivee1');
        $('body').removeClass('changeBgActivee2');
        $('body').removeClass('changeBgActivee3');
        $('body').removeClass('changeBgActivee4');
        $('body').removeClass('changeBgActivee5');
    }
}
//slide 
var swiper = new Swiper('.swiper-container', {
    navigation: {
        spaceBetween: 0,
        slidesPerView: 1,
        nextEl: '.swiper_button_prj_stt_next',
        prevEl: '.swiper_button_prj_stt_pre',
    },
    
});