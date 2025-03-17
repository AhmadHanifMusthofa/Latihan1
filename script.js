document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');
    const navbarNav = document.querySelector('.navbar-nav');

    // Fungsi toggle menu dengan sedikit delay untuk animasi
    function toggleMenu() {
        navbarNav.classList.toggle('active');

        if (navbarNav.classList.contains('active')) {
            setTimeout(() => {
                menu.style.display = 'none';
                closeMenu.style.display = 'block';
            }, 300); // Delay agar lebih smooth
        } else {
            setTimeout(() => {
                menu.style.display = 'block';
                closeMenu.style.display = 'none';
            }, 300);
        }
    }

    // Klik menu burger
    menu.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    // Klik tombol tutup (X)
    closeMenu.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    // Klik di luar menu untuk menutup
    document.addEventListener('click', (event) => {
        if (!navbarNav.contains(event.target) && !menu.contains(event.target) && !closeMenu.contains(event.target)) {
            navbarNav.classList.remove('active');
            setTimeout(() => {
                menu.style.display = 'block';
                closeMenu.style.display = 'none';
            }, 300);
        }
    });

    // Smooth scrolling dengan optimasi
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, 
                    behavior: "smooth"
                });
            }

            // Tutup navbar setelah klik menu
            navbarNav.classList.remove('active');
            setTimeout(() => {
                menu.style.display = 'block';
                closeMenu.style.display = 'none';
            }, 300);
        });
    });

    // Reset tampilan saat resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navbarNav.classList.remove('active');
            menu.style.display = 'block';
            closeMenu.style.display = 'none';
        }
    });
});
