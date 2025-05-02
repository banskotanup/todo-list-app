function handleUpdate(taskId) {
  const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  const taskToUpdate = tasks.find((task) => task.id === taskId);
  if (!taskToUpdate) return;

  const formDiv = document.querySelector(".form");

  formDiv.innerHTML = `
    <form id="edit-task-form" data-id="${taskId}">
    <div class="formDiv2">
    <label>
    <input type="text" name="task" id="task" value="${
      taskToUpdate.task
    }" required>
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
    </div>
    <div class="formDiv1">
    <label>
    <input type="date" name="dueDate" id="dueDate" value="${
      taskToUpdate.dueDate
    }" required>
          </label>
          <button type="submit" class="addTaskBtn">Save</button>
          </div>

    `;

  // Optional: Scroll into view or show if hidden
  formDiv.scrollIntoView({ behavior: "smooth" });
}

export const updateCardButton = () => {
  // Listen on a broader container that wraps table + cards (e.g., .task-list or .main-content)
  document.querySelector(".task-list").addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("update-btn")) {
      const row = target.closest(".card") || target.closest("tr");
      const taskId =
        row?.querySelector("input[data-id]")?.dataset.id || row?.dataset.id;
      handleUpdate(taskId);
    } else if (target.classList.contains("delete-btn")) {
      const row = target.closest(".card") || target.closest("tr");
      const taskId =
        row?.querySelector("input[data-id]")?.dataset.id || row?.dataset.id;

      if (!taskId) return;

      let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
      tasks = tasks.filter((task) => task.id !== taskId);
      localStorage.setItem("Tasks", JSON.stringify(tasks));

      location.reload();
    }
  });
};

export function submitCardUpdate() {
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
