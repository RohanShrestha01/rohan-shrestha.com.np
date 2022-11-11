// For adding 'active' class to Nav Links according to scroll
const circleLinkElements = document.getElementsByClassName(
  'circle__link'
) as HTMLCollectionOf<HTMLAnchorElement>;

const navLinkElements = document.getElementsByClassName(
  'nav__link'
) as HTMLCollectionOf<HTMLAnchorElement>;

const linkElementsArr = [circleLinkElements, navLinkElements];

const sectionElements = document.querySelectorAll('section.screen');

const activeLinkHandler = (determiningValue: string): void => {
  linkElementsArr.forEach((linkElements, i) => {
    for (const linkEl of linkElements) {
      let activeToggleEl: HTMLAnchorElement | HTMLDivElement = linkEl;
      if (i === 0) activeToggleEl = linkEl.querySelector('div')!;

      activeToggleEl.classList.remove('active');

      if (linkEl.hash === determiningValue)
        activeToggleEl.classList.add('active');
    }
  });
};

// Intersection Observer to observe all section elements
const obsOptions = {
  root: null,
  rootMargin: '-35% 0px -60% 0px',
};
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeSectionId = '#' + entry.target.id;
      activeLinkHandler(activeSectionId);
    }
  });
}, obsOptions);

sectionElements.forEach(sectionEl => {
  observer.observe(sectionEl);
});

export {};
