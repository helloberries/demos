$(function(){
    // 显示导航下的菜单
    $('.nav:nth-child(2)').mouseover(function () {
        $('.nav-menu').show();
    }).mouseout(function () {
        $('.nav-menu').hide();
    });
    // 点击小图切换商品图
    $('.product-preview-img-s').click(function () {
      clsName = $(this).attr('id');
      $('.product-preview-img').attr('class', 'product-preview-img');
      $('.product-preview-img').toggleClass(clsName);
    });
    // 选择颜色
    $('.color-radio-div input').click(function () {
      console.log($(this).attr('value'));
    });
});
