$('.reviews__slider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});