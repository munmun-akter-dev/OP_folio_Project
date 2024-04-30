// $(".slider").slick({
//   dots: true,
//   infinite: true,
//   slidesToShow: 1,
//   responsive: [{

//       breakpoint: 1024,
//       settings: {
//           slidesToShow: 1,
//           infinite: true
//       }

//   }, {

//       breakpoint: 600,
//       settings: {
//           slidesToShow: 1,
//           dots: true
//       }

//   }, {

//       breakpoint: 300,
//       // settings: "unslick" // destroys slick

//   }]
// });

$(document).ready(function(){
  $('.mySliderFile').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll:1,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });


});
