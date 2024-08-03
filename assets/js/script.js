document.addEventListener('DOMContentLoaded', () => {
  let header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    0 !== window.scrollY
      ? header.classList.add('bordered')
      : header.classList.remove('bordered');
  });
});
