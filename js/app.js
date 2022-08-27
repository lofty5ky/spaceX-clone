$(document).ready(function () {
  $(".bg-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="80" viewBox="0 0 6 10">
    <path d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z" transform="translate(6) rotate(90)" fill="#fff"></path>
  </svg></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="80" viewBox="0 0 6 10" data-metatip="true">
    <path d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z" transform="translate(0 10) rotate(-90)" fill="#fff"></path>
  </svg></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  });
});
