// Initialize DOM event listeners and handle animations on scroll
document.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector('header');
    const mobileMenu = document.getElementById('mobile-menu');

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!header.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate-fade-in');
            }
        });
    }

    // Initialize animations
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

console.log('app.js loaded');
