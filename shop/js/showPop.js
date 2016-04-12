;(function ($) {
  $.fn.showPop = function (options) {
    var defaults = {
      'width': '200px',
      'fontSize': ''
    };
    var settings = $.extend(defaults, options);
    // 插件里的this，经过了一些封装处理，this就是表示jQuery对象,
    // 而不需要再次使用$()进行包装了
    return this.each(function () {
      $(this).css({
        'color': settings.color,
        'fontSize': settings.fontSize
      });
    });
  };
})(jQuery);
