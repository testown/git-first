$('.js-slider-main2').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    }
  ]

});

