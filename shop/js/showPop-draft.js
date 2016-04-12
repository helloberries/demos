(function ($) {
  $.fn.extend({
    // 插件名称: showPop
    showPop: function (options) {

      //参数和默认值
      var defaults = {
        width: 300,
        height: 200
      };
      var options = $.extend(defaults, options);

      // 遍历匹配元素的集合
      return this.each(function () {
        var o = options;
        // 将元素集合赋给变量，本例中是body对象
        var obj = $(this);
        // 得到body中的button对象
        var items = $('button',obj);
        // 创建背景层
        items.click(function () {
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
        });
      });
    }
  });
})(jQuery);
