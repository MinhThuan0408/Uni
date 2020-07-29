//click show left_nav trên pc
$(document).ready(function () {
    $(".menuSidebar").click(function () {
        $('body').toggleClass('sidebar-expand')
    });
});

//css class activee (background,color...) + active big-list
$(document).ready(function(){
    $('.clickDrop').click(function() {
        $(".clickDrop").removeClass('activee').not(this).parent().removeClass('active').find('.left_nav--big_list').slideUp();
        $(this).addClass('activee').parent().addClass('active').find('.left_nav--big_list').slideToggle();
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


// ///hover expand
// $(document).ready(function () {
//     $(".left_nav").hover(function () {
//         if ($("body").hasClass('sidebar-expand')) {
//             $("body").toggleClass('sidebar-expand')
//             $('.left_nav').css('position', 'absolute');
//         }
//     })
// });


//clear text form search
$(document).ready(function () {
    $(".top_nav--iconClear").click(function () {
        $('.inputSearch').val('').focus();
    });
});

//show bảng màu
$(document).ready(function () {
    $(".setting_color").click(function () {
        $('.setting_color').toggleClass('showSettingColor');
    });
});
//đổi màu header bg -> chuyển gom class như expand
function changeHeadrBg(color){
    $(".top_nav").css("background",color);
    $(".left_nav").css("background",color);
    $(".top_nav--search").css("background",color);
    if(color == '#f2f6fb'){

        $(".top_nav--item").css("color","black");
        $(".left_nav--name").css("color","black");
        $(".left_nav--extend td").css("color","black");
        $(".line").css("background","black");

        $(".logoDark").css("display","block");
        $(".logoLight").css("display","none");
    }
    else{
        $(".top_nav--item").css("color","white");
        $(".left_nav--name").css("color","white");
        $(".left_nav--extend td").css("color","white");
        $(".line").css("background","white");

        $(".logoDark").css("display","none");
        $(".logoLight").css("display","block");
    }
}

//đổi màu leftnav bg
function changeLeftNavBg(color){
    $(".left_nav--list_tool").css("background",color);
    $(".left_nav--list_tool").css("color","white");
    
    if(color == '#f2f6fb'){
        $(".left_nav--list_tool").css("color","black");

    }
    else{
        $(".left_nav--list_tool").css("color","white");
    }
}
