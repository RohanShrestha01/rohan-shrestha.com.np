// For Hamburger Click Functionality
const hamburgerBtnEl = document.getElementById('hamburger-btn')!;
const navEl = document.getElementById('nav')!;
const backdropEl = document.getElementById('backdrop')!;

const drawerFunctionalityHandler = (): void => {
  hamburgerBtnEl.classList.toggle('active');
  navEl.classList.toggle('visible');
  backdropEl.classList.toggle('visible');
};

hamburgerBtnEl.addEventListener('click', drawerFunctionalityHandler);

// Close Drawer when clicked
backdropEl.addEventListener('click', drawerFunctionalityHandler);

export {};
