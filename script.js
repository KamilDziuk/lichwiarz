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
const value = document.querySelector(".box-minmax");
const input = document.querySelector("#rs-range-line");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
//range end