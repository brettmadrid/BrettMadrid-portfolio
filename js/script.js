$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  const typed = new Typed(".typed", {
    strings: ["Software Engineer"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  })
});
