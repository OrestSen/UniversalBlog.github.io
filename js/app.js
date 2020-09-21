// // slider slick
// $(".slider-block").slick()

// $('.one-time').slick({
//   dots: true,
//   infinite: true,
//   speed: 400,
//   slidesToShow: 4,
//   adaptiveHeight: true
// });
$(document).ready(function(){
  
  $(".fa-search").click(function(){
    $(".wrap, .input").toggleClass("active");
    $("input[type='search']").focus();
  });

});