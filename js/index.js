//->动态计算REM的换算比例
~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);
//
//->给滑屏区域进行初始化设置




  var followAudio  = document.getElementById("followAudio");
  var transformAudio  = document.getElementById("transformAudio");
  var readyAudio  = document.getElementById("readyAudio");

//->初始化Swiper
new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    //->向上切换结束:swiper->当前本次初始化new Swiper创建出来的实例
    onSlidePrevEnd: changeEnd,
    //->向下切换结束:swiper.activeIndex当前活动块的索引
    onSlideNextEnd: changeEnd
});

//->当切换结束的时候,我们需要做的事情:清除所有slide块的ID,在让当前活动块拥有对应的ID即可,拥有对应的ID才会有对应的动画
function changeEnd(swiper) {
    var n = swiper.activeIndex,

        slideAry = swiper.slides;//->获取当前所有的活动块(获取的结果是一个数组)
    console.log(n);

    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            // slide.id =
            //     if(n == 1 || n == 4)
            //         slide.id =
            //             "page1" : "page2";
            // slide.id = (n == 1 || n == 3) ? "page1" : "page2";

   // 1 -> 2 -> 3 -> 4(1)-> 2->3->4(1) //

            // 2-> 1 -> 0 -> 2 -> 1 -> 0 //
            switch  ( n ){
                case  4,1 :
                    slide.id = "page1";
                    break;
                case  2 :
                    slide.id = "page2";
                    break;
                case  3 :
                    slide.id = "page3";
                    break;
                // case  1 :
                //     slide.id = "page1";
                //     break;
            }

            return;
        }
        slide.id = null;


    });

    playAudio( slideAry,n);

}    


    var mySwiper = new Swiper('.swiper-container', {
        onSlideNextStart: function (swiper) {
            alert('向后滑动事件触发了;');
            musicAuto.play();
            console.log("向后滑动触发了");
        }
    });


  function playAudio(slideAry,n) {
      window.setTimeout(function () {

          [].forEach.call(slideAry, function (slide, index) {
              if(n === 1 || n === 4)
                  followAudio.play();
              // readyAudio.play();
             else  if (n === 3)
                  readyAudio.play();
                  // followAudio.play();
               else if (n === 2 || n === 0)
                  transformAudio.play();
          });

      },10)
  }


// mySwiper();

//
//     //->给区域增加一个loop:true的时候,会自己往开头和结尾各增加一张一模一样的,但是我还需要把区域定位到“真实的第一张”,所以开始会自己向下切换一次,我们让初始的step=0即可
// }();
//
// //->音频的自动播放
// ~function () {
//     var audioBox = document.querySelector(".audio"),
//         myAudio = audioBox.getElementsByTagName("audio")[0];
//
//     //->延时播放音频文件,先让其他的内容加载
//     window.setTimeout(function () {
//         myAudio.play();
//         myAudio.addEventListener("canplay", function () {
//             //->当音频可以播放的时候触发这个事件
//             audioBox.style.display = "block";
//             audioBox.className += " audioMove";
//         }, false);
//     }, 1000);
//
//     //->点击音乐图标,实现音频的暂停或者播放
//     audioBox.addEventListener("click", function () {
//         if (myAudio.paused) {//->当前是暂停的,我让其播放
//             myAudio.play();
//             audioBox.className = "audio audioMove";
//             return;
//         }
//         //->当前是播放的,我让其暂停
//         myAudio.pause();
//         audioBox.className = "audio";
//     }, false);
// }();
//
// //->移动端是可以使用click事件的,但是click事件存在300ms延迟（当第一次点击下来,浏览器需要等待300ms,看是否存在第二次触发,如果存在第二次的触发,属于双击,不存在才是单击）
//
// //->解决方案一：使用click,我把300ms延迟解决  ->FastClick插件
//
// //->解决方案二：不用click,使用touch事件模型模拟出单击的效果
// //->移动端的事件和PC端的事件是不相同的,移动端不存在鼠标,我们所有的操作依靠的是手指
// //->点击(tap)、单击(singleTap)、双击(doubleTap)、长按(longTap)、滑动(swipe)、上滑(swipeUp)、下滑(swipeDown)、左滑(swipeLeft)、右滑(swipeRight) ->"单手指操作":我们使用touch事件模型把上述操作模拟出来 touchstart、touchmove、touchend、touchcancle
//
// //点击 && 滑动 : 手指结束位置和手指起始位置的偏移距离,小于30px算作点击,大于30px算作滑动
// //单击 && 双击 : 第一次触发touchstart之后,在300ms内是否触发了第二次
// //长按 ：在750ms内手指是否离开屏幕,没有离开属于长按
// //滑动 ：
//
// //->缩放(pinch)、放大(pinchOut)、缩小(pinchIn)、旋转(rotate)... ->"多手指操作":我们使用gesture事件模型把上述操作模拟出来
//
//
// //->"移动端专有的事件库"
// //1)Zepto.js(移动端小型的jQuery库),在这个库中提供了移动端的专用事件以及提供了CSS3动画的支持
// //$("#div1").doubleTap(function(){}); 上述单手指操作提供的那些方法都支持
//
// //2)touch.js(百度云touch手势事件库) http://touch.code.baidu.com/
//
// //3)hammer.js(国际通用手势事件库)
//
//
//
//
//
//
//
//
//
//
//
