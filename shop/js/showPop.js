;(function ($) {
  $.fn.showPop = function (options) {
    $.fn.showPop.defaults = {
      'width': '300px',
      'height': '200px',
      'title': {
        'display': 'block', // 如果不需要title,请设置'none'
        'titleName': 'WELCOME'
      },
      'containerCss': {}, // 内容container的样式
      'content': '', // 填入html字符串
      'contentCss': {}, //设置内容的css样式
    };
    var settings = $.extend( {}, $.fn.showPop.defaults, options );
    // 插件里的this，经过了一些封装处理，this就是表示jQuery对象,
    // 而不需要再次使用$()进行包装了
    return this.each(function () {
      // 创建幕布
      var popBg = $('<div />', {id: 'popBg'});
      popBg.appendTo('body');
      $('#popBg').css({
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'width': '100%',
        'height': '100%',
        'background-color': 'rgba(0,0,0,.15)'
      });
      // 创建弹出层
      var pop = $('<div />', {id: 'pop'});
      pop.appendTo(popBg);
      $('#pop').css({
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'width': settings.width,
        'height': settings.height,
        'margin-left': -parseInt(settings.width)/2 + 'px',
        'margin-top': -parseInt(settings.height)/2 + 'px',
        'border': '1px solid #000',
        'background-color': '#fefefe'
      });
      // 创建标题（可选）
      var popTitle = $('<span />', {class: 'popTitle'});
      popTitle.text(settings.title.titleName);
      popTitle.appendTo(pop);
      popTitle.css({
        'position': 'absolute',
        'top': 0,
        'display': settings.title.display,
        'width': '100%',
        'height': parseInt(settings.height) * 0.2 + 'px',
        'line-height': parseInt(settings.height) * 0.2 + 'px',
        'text-align': 'center',
        'font-family': 'Britannic, monospace',
        'color': '#fefefe',
        'background-color': '#000'
      });
      // 创建内容
      var popContent = $('<div />', {class: 'popContent'});
      var popCtntText = $(settings.content);
      popCtntText.appendTo(popContent);
      popCtntText.css(settings.contentCss);
      popContent.appendTo(pop);
      popContent.css(settings.containerCss);
      // 清除弹出层和幕布
      popBg.click(clearPopBg);
    });
  };
  // 私有方法：清除弹出层和幕布
  function clearPopBg () {
    $(this).children().remove();
    $(this).remove();
  }
})(jQuery);
