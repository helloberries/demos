/* 判断添加删除元素class */
var hasClass = function(obj, cls) {
  return obj.className.match(new RegExp('(^|\\s)' + cls + '(\\s|$)'));
};
var addClass = function(obj, cls) {
  if (!hasClass(obj, cls)) {
    if (obj.className.length === 0) {
      obj.className = cls;
    }
    else {
      obj.className += ' ' + cls;
    }
  }
};
var rvClass = function(obj, cls) {
  if (hasClass(obj, cls)){
    var argu = new RegExp('(^|\\s)' + cls + '(\\s|$)');
    obj.className = obj.className.replace(argu, '');
  }
};

/* 开始 */
var prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    slidepics = document.getElementById('slide').getElementsByTagName('li'),
    dots = document.getElementById('dot').getElementsByTagName('li'),
    n = slidepics.length,
    index = 0, // 眼前图片的顺序值
    fade = false; // 布尔值，防止连续快速点击造成卡顿

// 设置透明度，渐变
var setOpacity = function() {};
