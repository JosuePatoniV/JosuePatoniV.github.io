// Animación para los enlaces relacionados

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.related-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('hovered');
        });
        link.addEventListener('mouseleave', () => {
            link.classList.remove('hovered');
        });
    });
});
