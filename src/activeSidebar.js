export const sidebarToggle = () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('aside');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active-sidebar');
    });
};