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


const checkBoxes = document.querySelectorAll("#checkTaskActive");


checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("change", () => {
        const taskId = checkBox.getAttribute("data-id");
        const localTask = JSON.parse(localStorage.getItem("Tasks"));
        if (checkBox.checked) {
            console.log("Checkbox is checked ✅");
            const updateTask = localTask.map((task) => {
                if (task.id === taskId) {
                    task.remDay = "Completed";
                }
                return task;
            })
            localStorage.setItem("Tasks", JSON.stringify(updateTask));
            setTimeout(() => location.reload(), 200);
        }
    })
})


