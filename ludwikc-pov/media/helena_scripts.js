document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('nav .menu li a');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('animate__animated', 'animate__bounce');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('animate__animated', 'animate__bounce');
        });
    });
});

