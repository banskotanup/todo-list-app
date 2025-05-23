import "./styles.css";
import "./responsive.css";

import { sidebarToggle } from "./activeSidebar";
import { addTask } from "./addTask";
import { initDialog } from "./initDialogHandler";
import { taskTableUi } from "./taskTableUi";
import { checkBox } from "./checkBox";
import { sidebarBtnHandler } from "./sideBarBtnHandler";
import { updateButton } from "./updateBtn";
import { submit } from "./updateBtn";


document.addEventListener("DOMContentLoaded", () => {
    addTask.domLoad();
});

initDialog.initDOMLoad();
sidebarBtnHandler.initTaskAddLoad();
sidebarToggle();
sidebarBtnHandler.allTaskBtn();
sidebarBtnHandler.todBtn();
sidebarBtnHandler.impoBtn();
sidebarBtnHandler.completeBtn();
sidebarBtnHandler.expiredBtn();
