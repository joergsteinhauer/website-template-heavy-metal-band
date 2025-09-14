/* Navigation */

const buttonNavMain = document.querySelector('.button-nav-main');
const wrapperNavMain = document.querySelector('.wrapper-nav-main');
const navMain = document.querySelector('.nav-main');

const toggleNav = (active) => {
    // Use the 'active' parameter to force a state, or toggle if it's undefined
    wrapperNavMain.classList.toggle('is-active', active);
    buttonNavMain.setAttribute('aria-expanded', wrapperNavMain.classList.contains('is-active'));
};

// Toggle menu on button click
buttonNavMain.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the document
    toggleNav();
});

// Close menu when a navigation link is clicked
navMain.addEventListener('click', (e) => {
    // Check if a link was clicked inside the nav
    if (e.target.closest('a')) {
        toggleNav(false); // Force-close the menu
    }
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (wrapperNavMain.classList.contains('is-active')) {
        // Check if the click was inside the nav or on the button
        const isClickInsideNav = navMain.contains(e.target);
        const isClickOnButton = buttonNavMain.contains(e.target);

        if (!isClickInsideNav && !isClickOnButton) {
            toggleNav(false);
        }
    }
});

// Close menu with the Escape key for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wrapperNavMain.classList.contains('is-active')) {
        toggleNav(false);
        buttonNavMain.focus(); // Return focus to the button
    }
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

/* Set current year */
const setCopyrightYear = () => {
    const containerYear = document.querySelector('#current-year');
    if (containerYear) {
        containerYear.textContent = new Date().getFullYear();
    }
};

setCopyrightYear();