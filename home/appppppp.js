




//scroll to top
document.querySelector('.scroll-to-top').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});
window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var scrollToTop = document.querySelector('.scroll-to-top');
  if (window.scrollY > header.offsetHeight) {
    scrollToTop.classList.add('scroll-to-top-show');
  } else {
    scrollToTop.classList.remove('scroll-to-top-show');
  }
});




