import "./styles.css";
import "./responsive.css";

import { sidebarToggle } from "./activeSidebar";
import { addTask } from "./addTask";
import { initDialog } from "./initDialogHandler";
import { taskTableUi } from "./taskTableUi";


initDialog.initDOMLoad();
sidebarToggle();
addTask.addBtnTask();
taskTableUi.storedTasks();
