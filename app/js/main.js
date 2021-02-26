$(function(){

   $('.blog-page__slider').slick({
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="7pt" height="14pt" viewBox="0 0 7 14" version="1.1"><g><path d="M 0.0195312 6.957031 C 0.0195312 6.707031 0.105469 6.464844 0.269531 6.273438 L 5.507812 0.28125 C 5.652344 0.09375 5.875 -0.015625 6.113281 -0.015625 C 6.347656 -0.015625 6.570312 0.09375 6.714844 0.28125 C 7.050781 0.675781 7.050781 1.253906 6.714844 1.652344 L 2.082031 6.957031 L 6.714844 12.265625 C 7.046875 12.664062 7.046875 13.246094 6.714844 13.648438 C 6.566406 13.828125 6.34375 13.933594 6.109375 13.933594 C 5.878906 13.933594 5.65625 13.828125 5.507812 13.648438 L 0.269531 7.65625 C 0.105469 7.460938 0.0195312 7.214844 0.0195312 6.957031 Z M 0.0195312 6.957031 "/></g></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="7pt" height="14pt" viewBox="0 0 7 14" version="1.1"><g><path d="M 7 6.984375 C 7 6.734375 6.917969 6.488281 6.761719 6.285156 L 1.484375 0.28125 C 1.335938 0.09375 1.113281 -0.0117188 0.875 -0.0117188 C 0.636719 -0.0117188 0.414062 0.09375 0.265625 0.28125 C -0.0703125 0.679688 -0.0703125 1.265625 0.265625 1.664062 L 4.929688 6.984375 L 0.265625 12.304688 C -0.0703125 12.707031 -0.0703125 13.289062 0.265625 13.691406 C 0.417969 13.871094 0.640625 13.976562 0.875 13.976562 C 1.109375 13.976562 1.332031 13.871094 1.484375 13.691406 L 6.761719 7.671875 C 6.925781 7.480469 7.007812 7.238281 7 6.984375 Z M 7 6.984375 "/></g></svg></button>',
      infinite: false,
   });

   
   $('.product-tabs__top-item').on('click', function(e){
      e.preventDefault();
      $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
      $(this).addClass('product-tabs__top-item--active');

      $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
      $($(this).attr('href')).addClass('product-tabs__content-item--active');
   });

   $('.product-slide__thumb').slick({
      asNavFor: '.product-slide__big',
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      draggable: false,
   });
   $('.product-slide__big').slick({
      asNavFor: '.product-slide__thumb',
      draggable: false,
      arrows: false,
      fade: true,
   });

   $('.shop-content__filter-btn').on('click', function () {
      $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
      $(this).addClass('shop-content__filter-btn--active');
   });

   $('.button-list').on('click', function () {
      $('.product-item').addClass('product-item--list');
   });

   $('.button-grid').on('click', function () {
      $('.product-item').removeClass('product-item--list');
   });



   $('.select-style, .product-one__num').styler();

   $('.filter-price__input').ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },
   });

   $('.top-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000
   });

   $(".star").rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true,
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg"xmlns: xlink = "http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1" > <g id="surface1">     <path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /> </g> </svg>',
   });


   function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
         total,
         days,
         hours,
         minutes,
         seconds
      };
   }

   function initializeClock(id, endtime) {
      const clock = document.querySelector('.promo__clock');
      const daysSpan = clock.querySelector('.promo__days');
      const hoursSpan = clock.querySelector('.promo__hours');
      const minutesSpan = clock.querySelector('.promo__minutes');
      const secondsSpan = clock.querySelector('.promo__seconds');

      function updateClock() {
         const t = getTimeRemaining(endtime);

         daysSpan.innerHTML = t.days;
         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

         if (t.total <= 0) {
            clearInterval(timeinterval);
         }
      }

      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
   }

   const deadline = $('.promo__clock').attr('data-time');
   initializeClock('promo__clock', deadline);


});