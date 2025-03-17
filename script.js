document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const navbarNav = document.querySelector('.navbar-nav');

    // Toggle menu display on click
    menu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from bubbling to document
        if (navbarNav.style.display === 'flex') {
            navbarNav.style.display = 'none';
        } else {
            navbarNav.style.display = 'flex';
            navbarNav.style.right = '0'; // Ensure it appears from the right
        }
    });

    // Ensure navbar is hidden on page load for mobile view
    if (window.innerWidth <= 768) {
        navbarNav.style.display = 'none';
    }

    // Listen for window resize to toggle navbar visibility accordingly
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navbarNav.style.display = 'flex';
        } else {
            navbarNav.style.display = 'none';
        }
    });

    

    // Prevent the click event from bubbling up to document when clicking inside the navbar
    navbarNav.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});


