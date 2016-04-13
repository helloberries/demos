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
      $(this).addClass('selected').siblings().removeClass('selected');
    });
    // 查看大图
    $('#zoominBtn').click(function (e) {
      var src = $('.product-preview-img img').attr('src');
      var largeImg = $('<img />', {src: src});
      largeImg.css({'width': '100%', 'height': '100%'});
      $(this).showPop({
        'width': '350px',
        'height': '467px',
        'title':{
          'display': 'none'
        },
        'content': '<img src="' + src + '">',
        'contentCss': {
          'width': '100%',
          'height': '100%'
        }
      });
      e.preventDefault();
    });
    // 选择颜色
    $('.color-radio-div input').click(function () {
      // 显示颜色的名字
      $('.choosed-color').text($(this).attr('value'));
      // 根据所选颜色，展示图片
      var productPreviewImgsId = 'tennis-skirt-' + $(this).attr('value');
      // 展示小缩略图
      $('#'+productPreviewImgsId).css('display', 'block').siblings().css('display', 'none');
      var src = $('#'+productPreviewImgsId + ' img').eq(0).attr('src');
      $('.product-preview-img img').attr('src', src);
      // 确保每次重新选择颜色，展示图都是全身图
      $('#'+productPreviewImgsId + ' img').eq(0).addClass('selected').siblings().removeClass('selected');
      // 给选中的颜色块添加边框
      $(this).parent().css('outline', '1px solid #585858').siblings().css('outline', 'none');
    });

    // 选择尺码
    $('.size-radio-div input').click(function () {
      $('.choosed-size').text($(this).attr('value'));
      $(this).parent().find('span').css('border', '1px solid #000').parent().siblings().find('span').css('border', '1px solid #a8a8a8');
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
      $(this).showPop({
        'title': {
          'titleName': 'Are you Sure?'
        },
        'width': '300px',
        'height': '200px',
        'containerCss': {
          'padding': '10px',
          'padding-top': parseInt('200px') * 0.2 + 10 + 'px',
          'width': '100%',
          'height': '100%',
          'font-family': 'Courier New, sans-serif',
          'text-transform': 'capitalize'
        },
        'content': '<p>'+'Color: ' + $('#color').text()+'</p>'+
                   '<p>'+'Size: ' + $('#size').text()+'</p>'+
                   '<p>'+'Quantity: ' + $('#quantity').val()+'</p>'+
                   '<p>'+'Total price: ' + $('#totalPrice').text()+'</p>'+
                   '<button class="popBtn">'+'yes'+'</button>'+
                   '<button class="popBtn">'+'no'+'</button>',
        'contentCss': {
          'font-family': 'Courier New, sans-serif',
          'text-transform': 'capitalize'
        }
      });
      e.preventDefault();
    });

});

$.util = {
  showPop: function(popContent, popW, popH, titleName, titleH) {
    // 创建透明背景
    $('<div />', {id: 'popBg', class: 'popBg'}).appendTo('body');
    // 创建浮出层
    var $pop = $('<div />');
    $pop.css({
      'width': popW+'px',
      'height': popH+'px',
      'margin-left': -parseInt(popW/2)+'px',
      'margin-top': -parseInt(popH/2)+'px'
    });
    // 创建标题
    var $title = $('<span />');
    $title.css({
      'display': 'block',
      'width': '100%',
      'height': titleH+'px',
      'padding': 10+'px',
      'color': '#a8a8a8',
      'background-color': '#666',
      'font-family': '"Spinnaker", monospace'
    });
    var $titleName = $(titleName);
    $title.text($titleName.text());
    $title.appendTo($pop);
    // 添加浮出层的内容
    popContent.appendTo($pop);
    $pop.attr({id: 'pop', class: 'pop'});
    // 向body添加浮出层
    $pop.appendTo('body');
    // 点击页面，清除浮出层
    $('#popBg').click(function () {
      $(this).remove();
      $('#pop').remove();
    });
  }
};
