$('.reviews__slider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$('.chef__btn-link').on('click', function (e) {
  e.preventDefault()
  $('.chef__popup').toggleClass('chef__popup--open')
  $('body').toggleClass('scroll')
  $('.overlay').toggleClass('overlay--show')
});
$('.chef__popup-btn').on('click', function (e) {
  e.preventDefault()
  $('.chef__popup-2').toggleClass('chef__popup-2--open')
  $('.chef__popup').removeClass('chef__popup--open')
  $('body').toggleClass('scroll')
});
$('.footer__inner-forma-button, .overlay').on('click', function (e) {
  e.preventDefault()
  $('.chef__popup-3').toggleClass('chef__popup-3--open')
  $('body').toggleClass('scroll')
  $('.overlay').toggleClass('overlay--show')
});
$('.overlay').on('click', function (e) {
  e.preventDefault()
  $('.chef__popup-2').removeClass('chef__popup-2--open')
  $('.chef__popup-3').removeClass('chef__popup-3--open')
  $('.chef__popup').removeClass('chef__popup--open')
  $('body').removeClass('scroll')
  $('.overlay').removeClass('overlay--show')
});
