import { allTasksInp } from "./allTaskInp";
import { addTask } from "./addTask";
import { allTasksList } from "./allTaskList";
import { taskTableUi } from "./taskTableUi";
import { checkBox } from "./checkBox";

export const sidebarBtnHandler = (() => {
    const sectionBody = document.querySelector(".body");

    const allTask = document.querySelector(".allTaskBtn");
    const todayBtn = document.querySelector(".todayBtn");


    const initTaskAddLoad = () => {
        document.addEventListener("DOMContentLoaded", () => {
            const table = document.querySelector("table");
            const formDiv = document.querySelector(".form");

            const { form } = allTasksInp.allTaskInp();
            const { tr } = allTasksList.allTaskList();

            formDiv.appendChild(form);

            table.appendChild(tr);
            taskTableUi.storedTasks();

            allTask.classList.add("active");
            todayBtn.classList.remove("active");
            addTask.addBtnTask();
            checkBox();
        })
    }

    const allTaskBtn = () => {
        allTask.addEventListener("click", () => {
            const table = document.createElement("table");
            const formDiv = document.createElement("form");

            sectionBody.appendChild(formDiv);
            sectionBody.appendChild(table);

            const { form } = allTasksInp.allTaskInp();
            const { tr } = allTasksList.allTaskList();

            formDiv.appendChild(form);
            
            table.appendChild(tr);
            taskTableUi.storedTasks();

            allTask.classList.add("active");
            todayBtn.classList.remove("active");
            addTask.addBtnTask();
            checkBox();
        })
    }

    const todBtn = () => {
        todayBtn.addEventListener("click", () => {
            sectionBody.textContent = "";
            todayBtn.classList.add("active");
            allTask.classList.remove("active");
        })
    }

    return {initTaskAddLoad, allTaskBtn, todBtn };
})();