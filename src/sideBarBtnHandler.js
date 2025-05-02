import { allTasksInp } from "./allTaskInp";
import { addTask } from "./addTask";
import { allTasksList } from "./allTaskList";
import { taskTableUi } from "./taskTableUi";
import { checkBox } from "./checkBox";
import { submit, updateButton } from "./updateBtn";
import { taskCard } from "./taskCardUi";
import { submitCardUpdate, updateCardButton } from "./updateCardBtn";

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
      taskCard.storedTasks();

      allTask.classList.add("active");
      todayBtn.classList.remove("active");
      impBtn.classList.remove("active");
      compBtn.classList.remove("active");
      expBtn.classList.remove("active");
      addTask.addBtnTask();
      checkBox();
      updateButton();
      submit();
      updateCardButton();
      submitCardUpdate();
    });
  };

  const allTaskBtn = () => {
    allTask.addEventListener("click", () => {
      const table = document.createElement("table");
      table.textContent = "";

      const taskList = document.querySelector(".task-list");
      if (taskList) taskList.textContent = "";

      const { tr } = allTasksList.allTaskList();

      table.appendChild(tr);
      taskTableUi.storedTasks();
      taskCard.storedTasks();

      allTask.classList.add("active");
      todayBtn.classList.remove("active");
      impBtn.classList.remove("active");
      compBtn.classList.remove("active");
      expBtn.classList.remove("active");
      checkBox();
      updateButton();
      submit();
      updateCardButton();
      submitCardUpdate();
    });
  };

  const todBtn = () => {
    todayBtn.addEventListener("click", () => {
      const table = document.querySelector("table");
      table.textContent = "";

      const taskList = document.querySelector(".task-list");
      if (taskList) taskList.textContent = "";

      const { tr } = allTasksList.allTaskList();

      table.appendChild(tr);
      taskTableUi.filteredTask();
      taskCard.filteredTask();

      todayBtn.classList.add("active");
      allTask.classList.remove("active");
      impBtn.classList.remove("active");
      compBtn.classList.remove("active");
      expBtn.classList.remove("active");
      checkBox();
      updateButton();
      submit();
      updateCardButton();
      submitCardUpdate();
    });
  };

  const impoBtn = () => {
    impBtn.addEventListener("click", () => {
      const table = document.querySelector("table");
      table.textContent = "";

      const taskList = document.querySelector(".task-list");
      if (taskList) taskList.textContent = "";

      const { tr } = allTasksList.allTaskList();

      table.appendChild(tr);

      table.appendChild(tr);
      taskTableUi.filteredTaskOnPriority();
      taskCard.filteredTaskOnPriority();

      impBtn.classList.add("active");
      todayBtn.classList.remove("active");
      allTask.classList.remove("active");
      compBtn.classList.remove("active");
      expBtn.classList.remove("active");
      checkBox();
      updateButton();
      submit();
      updateCardButton();
      submitCardUpdate();
    });
  };

  const completeBtn = () => {
    compBtn.addEventListener("click", () => {
      const formDiv = document.querySelector(".form");
      const table = document.querySelector("table");
      table.textContent = "";

      const taskList = document.querySelector(".task-list");
      if (taskList) taskList.textContent = "";

      const { tr } = allTasksList.allTaskList();

      table.appendChild(tr);

      table.appendChild(tr);
      taskTableUi.filteredTaskOnComplete();
      taskCard.filteredTaskOnComplete();

      impBtn.classList.remove("active");
      todayBtn.classList.remove("active");
      allTask.classList.remove("active");
      compBtn.classList.add("active");
      expBtn.classList.remove("active");
      checkBox();
      updateButton();
      submit();
      updateCardButton();
      submitCardUpdate();
    });
  };

  const expiredBtn = () => {
    expBtn.addEventListener("click", () => {
      const table = document.querySelector("table");
      table.textContent = "";

      const taskList = document.querySelector(".task-list");
      if (taskList) taskList.textContent = "";

      const { tr } = allTasksList.allTaskList();

      table.appendChild(tr);
      taskTableUi.filteredTaskOnExpired();
      taskCard.filteredTaskOnExpired();

      impBtn.classList.remove("active");
      todayBtn.classList.remove("active");
      allTask.classList.remove("active");
      compBtn.classList.remove("active");
      expBtn.classList.add("active");
      checkBox();
      updateButton();
      submit();
      updateCardButton();
      submitCardUpdate();
    });
  };

  return {
    initTaskAddLoad,
    allTaskBtn,
    todBtn,
    impoBtn,
    completeBtn,
    expiredBtn,
  };
})();
