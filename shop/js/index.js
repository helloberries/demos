//
//    BY helloberries@Github
//
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
    // 首页轮播图
    var container = $('#slide-container'),
        list = $('#slide'),
        buttons = $('#buttons span'),
        prev = $('#prev'),
        next = $('#next'),
        index = 1,
        len = 5,
        interval = 3000,
        timer;

    function showButton () {
      buttons.eq(index-1).addClass('on').siblings().removeClass('on');
    }
    function animate(offset) {
      var left = parseInt(list.css('left')) + offset;
      if (offset > 0) {
        offset = '+=' + offset;
      } else {
        offset = '-=' + Math.abs(offset);
      }
      list.animate({'left': offset}, 300, function () {
        if (left > -800) {
          list.css('left', -800 * len);
        } else if (left < (-800 * len)) {
          list.css('left', -800);
        }
      });
    }

    function play () {
      timer = setTimeout(function () {
        next.trigger('click');
        play();
      }, interval);
    }
    function stop () {
      clearTimeout(timer);
    }

    next.bind('click', function(){
      if (list.is(':animated')) {
        return;
      }
      if (index === 5) {
        index = 1;
      } else {
        index ++;
      }
      animate(-800);
      showButton();
    });
    prev.bind('click', function(){
      if (list.is(':animated')) {
        return;
      }
      if (index === 1) {
        index = 5;
      } else {
        index --;
      }
      animate(800);
      showButton();
    });
    buttons.each(function () {
      $(this).bind('click',function () {
        if (list.is(':animated') || $(this).attr('class') === 'on') {
          return;
        }
        var myIndex = parseInt($(this).attr('index')); //目标索引
        var offset = -800 * (myIndex - index); //目标索引减去当前索引

        animate(offset);
        index = myIndex;
        showButton();
      });
    });


    container.hover(stop, play);
    play();
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
