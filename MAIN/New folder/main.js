document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('nav a');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with id "${targetId}" not found.`);
            }
        });
    });

    window.addEventListener('scroll', () => {
        const scrollToTopBtn = document.getElementById('scroll-to-top');
        if (scrollToTopBtn) {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.opacity = '1';
            } else {
                scrollToTopBtn.style.opacity = '0';
            }
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const portfolioContainer = document.querySelector('.portfolio-container');

    let scrollAmount = 0;
    const scrollSpeed = 1;
    const scrollWidth = portfolioContainer.scrollWidth;

    function autoScroll() {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollWidth) {
            scrollAmount = 0;
        }
        portfolioContainer.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(autoScroll);
    }

    autoScroll();
});