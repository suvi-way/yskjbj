(function(doc, win) {
var docEl = doc.documentElement,
 resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
 recalc = function() {
  var clientWidth = docEl.clientWidth;
  // console.log(clientWidth)
  if(!clientWidth) return;
  if(clientWidth >= 750) {
   // 这里的750 取决于设计稿的宽度
   // console.log(111)
   docEl.style.fontSize = '100px';
  } else {
    // console.log(222)
   docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
  }
 };

if(!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);