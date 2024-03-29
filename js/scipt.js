new Swiper(".market-trend__cards-wrapper", {
   spaceBetween: 30,
   breakpoints: {
      1590: {
         allowTouchMove: false,
         slidesPerView: 6,
      },
      1280: {
         slidesPerView: 4,
         allowTouchMove: true,
         loop: true,
      },
      1024: {
         slidesPerView: 4,
      },
      768: {
         slidesPerView: 3,
      },
      480: {
         slidesPerView: 2,
      },
      320: {
         slidesPerView: 1,
      },
   },
});

new Swiper('.about-us__swiper', {
   slidesPerView: 1,
   pagination: {
      el: '.about-us__swiper-pagination',
      type: 'bullets',
   },
   spaceBetween: 30,
   loop: true,
   breakpoints: {
      1024: {
         slidesPerView: 2.5,

      },
      768: {
         slidesPerView: 1.5,
         pagination: {
            el: '',
            type: 'bullets',
         },
      },
   },
});


//аккордеон
const questionsItemWrapper = document.querySelectorAll('.questions__item-wrapper');
questionsItemWrapper.forEach(item => {
   item.addEventListener('click', () => {
      let elem = item.querySelector('.questions__item');
      elem.classList.toggle('questions__item_active');
   })
});
//скролл
document.getElementById('link1').addEventListener("click", () => {
   console.log("sdasdasd")
   document.querySelector('.main').scrollIntoView();
})
//бургер
