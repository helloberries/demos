$(function(){
    // 显示导航下的菜单
    $('.nav-link:nth-child(2)').mouseover(function () {
        $('.nav-menu').show();
    }).mouseout(function () {
        $('.nav-menu').hide();
    });
});