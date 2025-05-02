import { taskTableUi } from "./taskTableUi";
function handleUpdate(taskId) {
  const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  const taskToUpdate = tasks.find((task) => task.id === taskId);
  if (!taskToUpdate) return;

  const formDiv = document.querySelector(".form");

  formDiv.innerHTML = `
    <form id="edit-task-form" data-id="${taskId}">
      <label>
      <input type="text" id="task" value="${taskToUpdate.task}" required />
      </label>
      <div class="select-wrapper">
        <select id="priority">
        <option value="high" ${
          taskToUpdate.priority === "high" ? "selected" : ""
        }>High</option>
        <option value="mid" ${
          taskToUpdate.priority === "mid" ? "selected" : ""
        }>Mid</option>
        <option value="low" ${
          taskToUpdate.priority === "low" ? "selected" : ""
        }>Low</option>
      </select>
      <i class="fas fa-angle-down"></i>
      </div>
      <label><input type="date" id="dueDate" value="${
        taskToUpdate.dueDate
      }" required /></label>
      <button type="submit" class="addTaskBtn">Save</button>
    </form>
  `;

  // Optional: Scroll into view or show if hidden
  formDiv.scrollIntoView({ behavior: "smooth" });
}

export const updateButton = () => {
  document.querySelector("table").addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("update-btn")) {
      const row = target.closest("tr");
      const taskId = row.querySelector("input[data-id]")?.dataset.id;
      handleUpdate(taskId);
    } else if (target.classList.contains("delete-btn")) {
      const row = target.closest("tr");
      const taskId = row.querySelector("input[data-id]")?.dataset.id;
      if (!taskId) return;

      let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
      tasks = tasks.filter((task) => task.id !== taskId);
      localStorage.setItem("Tasks", JSON.stringify(tasks));

      location.reload();
    } else if (target.classList.contains("view-btn")) {
      const row = target.closest("tr");
  const taskId = row.querySelector("input[data-id]")?.dataset.id;
  if (!taskId) return;

  const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;

  const formDiv = document.querySelector(".form");
  formDiv.innerHTML = `
    <div class="task-view">
      <h3>Task Details</h3>
      <p><strong>Task:</strong> ${task.task}</p>
      <p><strong>Priority:</strong> ${task.priority}</p>
      <p><strong>Due Date:</strong> ${task.dueDate}</p>
      <p><strong>Status:</strong> ${task.remDay}</p>
      <button class="close-view">Close</button>
    </div>
  `;

  // Optional: Scroll to view
  formDiv.scrollIntoView({ behavior: "smooth" });

  // Handle close
  formDiv.querySelector(".close-view").addEventListener("click", () => {
    formDiv.innerHTML = "";
  });
    }
  });
};

export function submit() {
  document.addEventListener("submit", (e) => {
    if (e.target && e.target.id === "edit-task-form") {
      e.preventDefault();

      const taskId = e.target.dataset.id;
      const updatedTask = document.querySelector("#task").value;
      const updatedPriority = document.querySelector("#priority").value;
      const updatedDueDate = document.querySelector("#dueDate").value;

      const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      if (taskIndex === -1) return;

      tasks[taskIndex].task = updatedTask;
      tasks[taskIndex].priority = updatedPriority;
      tasks[taskIndex].dueDate = updatedDueDate;

      localStorage.setItem("Tasks", JSON.stringify(tasks));

      location.reload();
    }
  });
}
