document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Get the current page's file name or default to 'index.html'
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
});