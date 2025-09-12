/* Navigation */

const buttonNavMain = document.querySelector('.button-nav-main');
const wrapperNavMain = document.querySelector('.wrapper-nav-main');

buttonNavMain.addEventListener('click', () => {
    wrapperNavMain.classList.toggle('is-active');
});

/* Back to top button */

const linkToTop = document.querySelector('.link-to-top');

if (linkToTop) {
    // We want the button to appear after scrolling 10em.
    // First, we calculate what 10em is in pixels.
    const scrollThreshold = 10 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Then, we add a scroll event listener to the window.
    window.addEventListener('scroll', () => {
        // The 'toggle' method's second argument is a boolean.
        // If true, the class is added. If false, it's removed.
        linkToTop.classList.toggle('is-active', window.scrollY > scrollThreshold);
    }, {passive: true}); // Use { passive: true } for better scroll performance.

    // Add a click event listener to handle scrolling to the top.
    linkToTop.addEventListener('click', (event) => {
        // 1. Prevent the default anchor behavior (which adds '#' to the URL).
        event.preventDefault();

        // 2. Scroll smoothly to the top of the page.
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}