const sidebar = document.querySelector('.sidebar');
const openCloseSidebarBtn = document.querySelector('.sidebar__open-close-sidebar-btn');

openCloseSidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-collapsed');
  openCloseSidebarBtn.classList.toggle('sidebar__open-close-sidebar-btn-sidebar-collapsed');
});