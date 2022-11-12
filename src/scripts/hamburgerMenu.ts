// For Hamburger Click Functionality
const hamburgerBtnEl = document.getElementById('hamburger-btn')!;
const navEl = document.getElementById('nav')!;
const backdropEl = document.getElementById('backdrop')!;
const navLinkElements = document.getElementsByClassName('nav__link');

const drawerFunctionalityHandler = (): void => {
  hamburgerBtnEl.classList.toggle('active');
  navEl.classList.toggle('visible');
  backdropEl.classList.toggle('visible');
  document.body.classList.toggle('no-scroll');
};

hamburgerBtnEl.addEventListener('click', drawerFunctionalityHandler);

const closeDrawer = (): void => {
  hamburgerBtnEl.classList.remove('active');
  navEl.classList.remove('visible');
  backdropEl.classList.remove('visible');
  document.body.classList.remove('no-scroll');
};

// Close Drawer when clicked
backdropEl.addEventListener('click', closeDrawer);

// Close Drawer when clicked on any nav links
for (const navLink of navLinkElements)
  navLink.addEventListener('click', closeDrawer);

export {};
