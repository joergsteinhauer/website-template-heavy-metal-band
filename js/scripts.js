/* Navigation */

const buttonNavMain = document.querySelector('.button-nav-main');
const wrapperNavMain = document.querySelector('.wrapper-nav-main');

buttonNavMain.addEventListener('click', () => {
    wrapperNavMain.classList.toggle('is-active');
});

/* Back to top button */

const linkToTop = document.querySelector('.link-to-top');

if (linkToTop) {
    // Button appears after scrolling 10em.
    // Calculate what 10em is in pixels.
    const scrollThreshold = 10 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Scroll event listener to the window.
    window.addEventListener('scroll', () => {
        linkToTop.classList.toggle('is-active', window.scrollY > scrollThreshold);
    }, {passive: true});

    // Click event listener to handle scrolling to the top.
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