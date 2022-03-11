window.addEventListener('load', () => {
  // swiper轮播图效果
  var bool = 0;
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      },
  });
  // 当鼠标移入，轮播停止；鼠标移出，轮播继续
  swiper.el.onmouseover = function(){
    swiper.autoplay.stop();
  }
  swiper.el.onmouseout = function(){
    swiper.autoplay.start();
  }
  for(var i=0; i<swiper.pagination.bullets.length; i++){
    swiper.pagination.bullets[i].addEventListener('mouseover', () => {
      this.click;
    })
  }
  // 切换背景
  var backgr = document.querySelector('.backgr');
  setInterval(autoBackground);
  function autoBackground() {
    if(bool==1){
      var currentIndex = swiper.activeIndex + 1;
    backgr.src = './img/bg' + currentIndex + '.jpg';
    }
  };
  // 开头文本效果
  setTimeout(begin, 4000);
  function begin() {
    bool = 1;
    backgr.classList.add('start');
  }
  var characters = document.querySelector('.characters');
  var textlist = 'Hello! This is a webpage, which can let sliding shows come true.And some functions might not do work in browers except Microsoft Edge. Hope this can make a little difference!!!'
  characters.innerHTML = textlist;
  setTimeout(() => {characters.style.display='none';}, 4000);
  // 方法一测试，用setinterval
  // var characters = document.querySelector('.characters');
  // var textlist = 'Hello! This is a webpage, which can let sliding shows come true.And some functions might not do work in browers except Microsoft Edge. Hope this can make a little difference!!!'
  // var i = 0;
  // setInterval(begin, 500);
  // function begin() {
  //   for(; i<textlist.length; i++) characters.innerHTML = characters.innerHTML + textlist[i];
  // }
  //方法二测试，用settimeout
  // var characters = document.querySelector('.characters');
  // var textlist = 'Hello! This is a webpage, which can let sliding shows come true.And some functions might not do work in browers except Microsoft Edge. Hope this can make a little difference!!!';
  // for(var i=0; i<textlist.length; i++){
  //   setTimeout(() => {characters.innerHTML = characters.innerHTML + textlist[i];}, 500);
  // }
})