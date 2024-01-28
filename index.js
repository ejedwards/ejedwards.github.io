$(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 0) { // Change this value to the amount of scroll you want
        $('.header').css('background-color', 'rgba(0, 0, 0, 0.85)'); // Change this to the color you want
      } else {
        $('.header').css('background-color', 'transparent');
      }
    });
  });

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $('.parallax-background').css('background-position', 'center calc(50% + ' + (scrollTop * 0.75) + 'px)');
    $('.mainImg').css('background-position', 'center calc(50% + ' + (scrollTop * 0.5) + 'px)');
});

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.scroll-btn');
  const headerHeight = document.querySelector('.header').offsetHeight; // Assuming your header has a tag name of 'header'

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const targetClass = this.getAttribute('data-target');
          const targetDivs = document.querySelectorAll(`.${targetClass}`);

          if (targetDivs.length > 0) {
              const targetPosition = targetDivs[0].offsetTop - headerHeight;
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });
});
