const headerEl = document.querySelector('header')!;
const headerBottom = headerEl.offsetTop + headerEl.offsetHeight;

let prevScrollPos = window.scrollY;
let prevScrollDir: 'up' | 'down' | null = null;
let hasClass = false;

const scrollHandler = () => {
  const currentScrollPos = window.scrollY;
  const currentScrollDir = currentScrollPos > prevScrollPos ? 'down' : 'up';

  prevScrollPos = currentScrollPos;

  // To change styling of header when it is displayed on scroll
  if (currentScrollPos > headerBottom && !hasClass) {
    headerEl.classList.add('scroll-header');
    hasClass = true;
  } else if (currentScrollPos < headerBottom && hasClass) {
    headerEl.classList.remove('scroll-header');
    hasClass = false;
  }

  // stop the funciton execution if scrolling in same direction
  if (currentScrollDir === prevScrollDir) return;

  // To hide header when user scrolls down and show when the user scrolls up
  if (currentScrollDir === 'down')
    headerEl.style.transform = `translateY(-${headerBottom}px)`;
  else headerEl.style.transform = 'translateY(0)';

  prevScrollDir = currentScrollDir;
};

window.addEventListener('scroll', scrollHandler);

export {};
