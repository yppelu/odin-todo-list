import { sidebar } from "../../constants.js";
import { collapseSidebarButton } from "../../constants.js";
import { expandSidebarButton } from '../../constants.js'
import { main } from "../../constants.js";

expandSidebarButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar_collapsed');
  collapseSidebarButton.classList.remove('sidebar__collapse-sidebar-btn_hidden');
  main.classList.add('main_collapsed');
});