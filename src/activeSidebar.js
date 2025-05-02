export const sidebarToggle = () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('aside');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active-sidebar');
    });

    const allTask = document.querySelector(".allTaskBtn");
    const todayBtn = document.querySelector(".todayBtn");
    const impBtn = document.querySelector(".impBtn");
    const compBtn = document.querySelector(".compBtn");
    const expBtn = document.querySelector(".expBtn");

    allTask.addEventListener("click", () => {
        sidebar.classList.remove("active-sidebar");
    })
    todayBtn.addEventListener("click", () => {
        sidebar.classList.remove("active-sidebar");
    })
    impBtn.addEventListener("click", () => {
        sidebar.classList.remove("active-sidebar");
    })
    compBtn.addEventListener("click", () => {
        sidebar.classList.remove("active-sidebar");
    })
    expBtn.addEventListener("click", () => {
        sidebar.classList.remove("active-sidebar");
    })
};