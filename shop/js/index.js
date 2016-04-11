$(function(){
    /* 搜索 */
    $('#search').keyup(function (e) {
      if (e.which === 13) {
        alert('没有商品(╯▽╰ )');
      }
    });
    // 显示导航下的菜单
    $('.nav:nth-child(2)').mouseover(function () {
        $('.nav-menu').show();
    }).mouseout(function () {
        $('.nav-menu').hide();
    });
    // 点击小图切换商品图
    $('.product-preview-img-s img').click(function () {
      var src = $(this).attr('src');
      $('.product-preview-img img').attr('src', src);
      $(this).addClass("selected").siblings().removeClass('selected');
    });
    // 选择颜色
    $('.color-radio-div input').click(function () {
      // 显示颜色的名字
      $('.choosed-color').text($(this).attr('value'));
      // 根据所选颜色，展示图片
      var productPreviewImgsId = 'tennis-skirt-' + $(this).attr('value');
      $('#'+productPreviewImgsId).css('display', 'block').siblings().css('display', 'none');
      var src = $('.product-preview-img-s img').attr('src');
      $('.product-preview-img').attr('src', src);
      // 给选中的小图添加边框
      $(this).parent().css('outline', '1px solid #585858').siblings().css('outline', 'none');
    });
    // 选择尺码
    $('.size-radio-div input').click(function () {
      $('.choosed-size').text($(this).attr('value'));
      $(this).siblings.css('border', '1px solid #666');
      $(this).parent().addClass('selected').siblings().removeClass('selected');
    });

    // 计算总价
    $('#quantity').blur(function () {
      // 数量验证
      if (!/^[1-9]\d*$/g.test($('#quantity').val())) {
        alert('Please Enter a Number');
      }
      $('#totalPrice').text('$' + $(this).val() * $('#price').text() + '.00');
    });
    // 弹出订单信息
    $('#addToCart').click(function (e) {
      console.log('Color: ' + $('#color').text());
      console.log('Size: ' + $('#size').text());
      console.log('Quantity: ' + $('#quantity').val());
      console.log('Total price: ' + $('#totalPrice').text());
      console.log('Thank you for buying!!! :D');
      e.preventDefault();
    });

});
