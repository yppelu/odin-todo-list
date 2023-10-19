import { sidebar } from "../../constants.js";
import { collapseSidebarButton } from "../../constants.js";
import { main } from "../../constants.js";

collapseSidebarButton.addEventListener('click', () => {
  sidebar.classList.add('sidebar_collapsed');
  collapseSidebarButton.classList.add('sidebar__collapse-sidebar-btn_hidden');
  main.classList.remove('main_collapsed');
});