const ScrollReveal = window.ScrollReveal;

const navElements: NodeListOf<HTMLLIElement> =
  document.querySelectorAll('#nav li');

const homeSectionElements: NodeListOf<HTMLElement> =
  document.querySelectorAll('.home__reveal');

const skillListElements = document.querySelectorAll('#skills ul');

ScrollReveal({
  delay: 200,
  distance: '20px',
  duration: 500,
  viewFactor: 0.25,
  easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // easeOutQuart
});

// animation for layout elements
ScrollReveal().reveal('#logo', { origin: 'top', delay: 0 });

navElements.forEach((navEl, i) => {
  ScrollReveal().reveal(navEl, { origin: 'top', delay: (i + 1) * 50 });
});

ScrollReveal().reveal('#header__resume-btn', { origin: 'top', delay: 250 });
document.querySelectorAll('body > aside').forEach((el, i) => {
  ScrollReveal().reveal(el as HTMLElement, {
    origin: i === 0 ? 'left' : 'right',
    delay: 300,
  });
});

ScrollReveal().reveal('#hamburger-btn', { origin: 'top', delay: 100 });

// animation for home section elements
homeSectionElements.forEach((el, i) => {
  ScrollReveal().reveal(el, { delay: (i + 1) * 50 });
});

//animation for lottie files
ScrollReveal().reveal('#developer-lottie', { origin: 'right', delay: 300 });
ScrollReveal().reveal('#background-lottie', { origin: 'right' });
ScrollReveal().reveal('#astronaut-reading-lottie', { origin: 'right' });

// animation for titles not present in home section
ScrollReveal().reveal('.screen:not(#home) > *:not(article), #skills h2', {
  origin: 'left',
});

// animation for skill elements in skill section
skillListElements.forEach(skillListEl => {
  const skillList = skillListEl.querySelectorAll('li');
  skillList.forEach((skillItem, i) => {
    ScrollReveal().reveal(skillItem, { delay: i * 100 });
  });
});

// animation for individual project in projects section and contact form
ScrollReveal().reveal('#projects article > ul > li, #contact article > div');

// animation for footer
ScrollReveal().reveal('footer');

export {};
