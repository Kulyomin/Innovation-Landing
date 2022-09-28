$(document).ready(function(){
    /* Initialize AOS */
    AOS.init({
        once: true
    });

    /* Меню */
    $('.nav_links a[href^="#"').click(function() {
        var target =$(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('.nav_links a[href^="#"').css({'color':'#fff'});
        $(this).css({'color':'#076CF0'});
        return false;
    });

    /* Выпадающее Меню */
    $('.menu_btn').click(function() {
        $('.nav_links').toggleClass('active');
       if($('.menu_btn').html() == '<i class="fa-solid fa-bars"></i>'){
            $(this).html('<i class="fas fa-times"></i>')
       }else{
        $(this).html('<i class="fa-solid fa-bars"></i>')
       }
    });

});