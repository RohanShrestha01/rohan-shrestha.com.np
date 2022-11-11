// To hide header when user scrolls down and show when the user scrolls up
const headerEl = document.querySelector('header')!;
const headerBottom = headerEl.offsetTop + headerEl.offsetHeight;
let prevScrollPos = window.scrollY;

const scrollHandler = () => {
  const currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos || currentScrollPos < headerBottom)
    headerEl.style.top = '0';
  else headerEl.style.top = `-${headerBottom}px`;

  // To change styling of header when it is displayed on scroll
  if (currentScrollPos > headerBottom) headerEl.classList.add('scroll-header');
  else headerEl.classList.remove('scroll-header');

  prevScrollPos = currentScrollPos;
};

window.addEventListener('scroll', scrollHandler);

export {};
