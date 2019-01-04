$(document).ready(function() {
  $("#lightSlider").lightSlider({
    auto: true,
    pauseOnHover: true,
    loop: true,
    controls: false,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          item: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          item: 1,
        }
      },
    ],
  });
});
