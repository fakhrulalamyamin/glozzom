$("#year").text(new Date().getFullYear());

$(".carousel").carousel({
  interval: 6000,
  pause: "hover",
});

// ekko lightbox
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// video play
$(function () {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto =
        videoSRC +
        "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.close").click(function () {
      $(theModal + " iframe").attr("src", videoSRC);
    });
  });
});

// slick Slider

$('.slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
});