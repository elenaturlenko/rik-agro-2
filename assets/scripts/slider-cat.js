$(document).ready(function () {
  $(".slider-cat").slick({
    arrows: false,
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },

      // {
      //   breakpoint: 767,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     autoplay: true,
      //     autoplaySpeed: 2500,
      //   },
      // },
    ],
  });
});
