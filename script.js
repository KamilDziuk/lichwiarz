//scroll 
$(window).scroll(function () {
  let scroll = $(window).scrollTop();

  if (scroll >= 50) {
      $(".fixed-top").addClass("change-fixed-top");
  } else {
      $(".fixed-top").removeClass("change-fixed-top");
  }
});
$(document).on('click', 'a', function (event) {
  event.preventDefault(); 
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 1250);
});
//scroll end

//range
let input = document.querySelector('#rs-range-line');
let value = document.querySelector('.box-minmax');
let text14 = document.querySelector('.text14');
let text2 = document.querySelector('.text2');
let text12 = document.querySelector('.text12');
text14.innerHTML =  value.textContent;
text12.innerHTML =  value.textContent;
text2.innerHTML =  value.textContent;
input.addEventListener('input', (event) =>
{
  value.textContent = event.target.value + ' zł';
  text14.innerHTML =  value.textContent;
  text12.innerHTML =  value.textContent;
  text2.innerHTML =  value.textContent;
});
//range end