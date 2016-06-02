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
    imglist = document.getElementById('imglist').getElementsByTagName('li'),
    dot = document.getElementById('dot').getElementsByTagName('li'),
    container = document.getElementById('container'),
    n = imglist.length,
    index = 0, // 眼前图片的顺序值
    fade = false; // 布尔值，防止连续快速点击造成卡顿

// 设置透明度，渐变
var setOpacity = function(obj, opa) {
  if (obj.filters) {
    obj.style.filter = "alpha(opacity:" + opa + ")";
  } else {
    obj.style.opacity = opa / 100;
  }
};

// 渐入函数，为下一张（即将显示的）图片所用
var fadeIn = function(obj) {
  fade = true;
  obj.style.display = "block";
  var opa = 0;
  var timer = setInterval(func, 1); //数字控制速度
  function func() {
    if (opa < 100) {
      opa += 2; //改变数字控制速度
      setOpacity(obj, opa);
    } else {
      clearInterval(timer);
      fade = false;
    }
  }
};

//淡出函数 为即将隐藏的眼前图片所用
var fadeOut = function(obj) {
  fade = true;
  var opa = 100;
  var timer = setInterval(func, 1);
  function func() {
    if (opa > 0) {
      opa -= 1;
      setOpacity(obj, opa);
    } else {
      clearInterval(timer);
      obj.style.display = 'none';
    }
  }
};

// 切换图片时小圆点跟着切换焦点
function lightdot() {
  for (var i=0; i<n; i++) {
    if (hasClass(dot[i], 'on')) {
      rvClass(dot[i], 'on');
      break;
    }
  }
  addClass(dot[index], 'on');
}

// 点击下一张切换
next.onclick = function() {
  if (fade) {
    return;
  } else {
    fadeOut(imglist[index]);
    index += 1;
    if (index === n) {
      index = 0;
    }
    fadeIn(imglist[index]);
    lightdot();
  }
};

//点击上一张切换
prev.onclick = function() {
  if (fade) {
    return;
  } else {
    fadeOut(imglist[index]);
    if (index === 0) {
      index = n;
    }
    index -= 1;
    fadeIn(imglist[index]);
    lightdot();
  }
};

// 小圆点控制切换
for (var i = 0; i < n; i++) {
  dot[i].order = i;
  dot[i].onclick = function() {
    // 添加控制
    if(this.order===index){return;}
    else{
        fadeOut(imglist[index]);
        index = this.order;
        fadeIn(imglist[index]);
        lightdot();
      }
};
}

//自动播放启停
function play() {
  auto = setInterval(function() {
    next.onclick();
  },
  3000);
}
function stop() {
  clearInterval(auto);
}
play();
container.onmouseover = stop;
container.onmouseout = play;
