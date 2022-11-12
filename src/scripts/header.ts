// To hide header when user scrolls down and show when the user scrolls up
const headerEl = document.querySelector('header')!;
const headerBottom = headerEl.offsetTop + headerEl.offsetHeight;

let timeoutScroll: NodeJS.Timeout; // holder for timeout id
let scrollThrottle = false;
let prevScrollPos = window.scrollY;

const scrollHandler = () => {
  const currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos || currentScrollPos < headerBottom)
    headerEl.style.transform = 'translateY(0)';
  else headerEl.style.transform = `translateY(-${headerBottom}px)`;

  // To change styling of header when it is displayed on scroll
  if (currentScrollPos > headerBottom) headerEl.classList.add('scroll-header');
  else headerEl.classList.remove('scroll-header');

  prevScrollPos = currentScrollPos;
};

window.addEventListener('scroll', () => {
  // Only run if not throttled
  if (!scrollThrottle) {
    scrollHandler();
    scrollThrottle = true;
    // Set a timeout to un-throttle
    setTimeout(() => {
      scrollThrottle = false;
    }, 400);
  } else {
    // debouncing, only when throttled
    clearTimeout(timeoutScroll);
    timeoutScroll = setTimeout(scrollHandler, 50);
  }
});

export {};
