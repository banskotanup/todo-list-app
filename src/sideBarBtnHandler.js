import { allTasksInp } from "./allTaskInp";
import { addTask } from "./addTask";
import { allTasksList } from "./allTaskList";
import { taskTableUi } from "./taskTableUi";
import { checkBox } from "./checkBox";

export const sidebarBtnHandler = (() => {
    const sectionBody = document.querySelector(".body");

    const allTask = document.querySelector(".allTaskBtn");
    const todayBtn = document.querySelector(".todayBtn");
    const impBtn = document.querySelector(".impBtn");
    const compBtn = document.querySelector(".compBtn");
    const expBtn = document.querySelector(".expBtn");


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
            impBtn.classList.remove("active");
            compBtn.classList.remove("active");
            expBtn.classList.remove("active");
            addTask.addBtnTask();
            checkBox();
        })
    }

    const allTaskBtn = () => {
        allTask.addEventListener("click", () => {
            sectionBody.textContent = "";
            const table = document.createElement("table");
            const formDiv = document.createElement("form");

            sectionBody.appendChild(formDiv);
            const hr = document.createElement("hr");
            sectionBody.appendChild(hr);
            sectionBody.appendChild(table);

            const { form } = allTasksInp.allTaskInp();
            const { tr } = allTasksList.allTaskList();

            formDiv.appendChild(form);
            
            table.appendChild(tr);
            taskTableUi.storedTasks();

            allTask.classList.add("active");
            todayBtn.classList.remove("active");
            impBtn.classList.remove("active");
            compBtn.classList.remove("active");
            expBtn.classList.remove("active");
            addTask.addBtnTask();
            checkBox();
        })
    }

    const todBtn = () => {
        todayBtn.addEventListener("click", () => {
            sectionBody.textContent = "";
            const table = document.createElement("table");
            const formDiv = document.createElement("form");

            sectionBody.appendChild(formDiv);
            const hr = document.createElement("hr");
            sectionBody.appendChild(hr);
            sectionBody.appendChild(table);

            const { form } = allTasksInp.allTaskInp();
            const { tr } = allTasksList.allTaskList();

            formDiv.appendChild(form);
            
            table.appendChild(tr);
            taskTableUi.filteredTask();
            addTask.addBtnTask();

            todayBtn.classList.add("active");
            allTask.classList.remove("active");
            impBtn.classList.remove("active");
            compBtn.classList.remove("active");
            expBtn.classList.remove("active");
            checkBox();
        })
    }

    const impoBtn = () => {
        impBtn.addEventListener("click", () => {
            sectionBody.textContent = "";
            const table = document.createElement("table");
            const formDiv = document.createElement("form");

            sectionBody.appendChild(formDiv);
            const hr = document.createElement("hr");
            sectionBody.appendChild(hr);
            sectionBody.appendChild(table);

            const { form } = allTasksInp.allTaskInp();
            const { tr } = allTasksList.allTaskList();

            formDiv.appendChild(form);
            
            table.appendChild(tr);
            taskTableUi.filteredTaskOnPriority();
            addTask.addBtnTask();

            impBtn.classList.add("active");
            todayBtn.classList.remove("active");
            allTask.classList.remove("active");
            compBtn.classList.remove("active");
            expBtn.classList.remove("active");
            checkBox();
        })
    }

    const completeBtn = () => {
        compBtn.addEventListener("click", () => {
            sectionBody.textContent = "";
            const table = document.createElement("table");
            const formDiv = document.createElement("form");

            sectionBody.appendChild(formDiv);
            const hr = document.createElement("hr");
            sectionBody.appendChild(hr);
            sectionBody.appendChild(table);

            const { form } = allTasksInp.allTaskInp();
            const { tr } = allTasksList.allTaskList();

            formDiv.appendChild(form);
            
            table.appendChild(tr);
            taskTableUi.filteredTaskOnComplete();
            addTask.addBtnTask();

            impBtn.classList.remove("active");
            todayBtn.classList.remove("active");
            allTask.classList.remove("active");
            compBtn.classList.add("active");
            expBtn.classList.remove("active");
            checkBox();
        })
    }

    const expiredBtn = () => {
        expBtn.addEventListener("click", () => {
            sectionBody.textContent = "";
            const table = document.createElement("table");
            const formDiv = document.createElement("form");

            sectionBody.appendChild(formDiv);
            const hr = document.createElement("hr");
            sectionBody.appendChild(hr);
            sectionBody.appendChild(table);

            const { form } = allTasksInp.allTaskInp();
            const { tr } = allTasksList.allTaskList();

            formDiv.appendChild(form);
            
            table.appendChild(tr);
            taskTableUi.filteredTaskOnExpired();
            addTask.addBtnTask();

            impBtn.classList.remove("active");
            todayBtn.classList.remove("active");
            allTask.classList.remove("active");
            compBtn.classList.remove("active");
            expBtn.classList.add("active");
            checkBox();
        })
    }

    return {initTaskAddLoad, allTaskBtn, todBtn, impoBtn, completeBtn, expiredBtn };
})();