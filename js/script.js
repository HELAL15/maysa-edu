


$(document).ready(function(){
    // dir
    var bodyDir = $('body').css('direction')
    var dirAr
    if(bodyDir == "rtl"){
      dirAr= true
    }
    else{
      dirAr = false
    }

    new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      dir: dirAr,
      loop: true,
      slidesPerView:2,
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
      breakpoints:{
       // when the window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when the window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when the window width is >= 1024px
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
    });


    new WOW().init();

console.log('no errors');


    //end
});







