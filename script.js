document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = '0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(card);
    });

    // Mobile Navigation Active Highlight
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.mobile-nav a, .nav-links a').forEach(link => {
        if(link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});