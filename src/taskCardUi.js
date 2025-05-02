export const taskCard = (() => {
    function cards (taskId, task, priority, dueDate, remDay) {
        if (remDay === 'Expired') {
            const taskList = document.querySelector(".task-list");
            const div = document.createElement("div");
            div.classList.add("card");
            div.classList.add("expired");
            div.setAttribute("style", "color: #6B7283");
            const h3 = document.createElement("h3");
            h3.classList.add("card-task-name");
            h3.innerHTML = `<span>Task:</span> ${task}`;
            div.appendChild(h3);

            const hr = document.createElement("hr");
            div.appendChild(hr);

            const div1 = document.createElement("div");
            div1.classList.add("info");

            const p = document.createElement("p");
            p.innerHTML = `<span><b>Priority:</b></span> ${priority}`;
            if (priority === "high") {
                p.setAttribute("style", "color: orange");
              } else if (priority === "mid") {
                p.setAttribute("style", "color: yellow");
              } else {
                p.setAttribute("style", "color: red");
              }
            div1.appendChild(p);

            const p1 = document.createElement("p");
            p1.innerHTML = `<span><b>Due Date:</b></span> ${dueDate}`;
            div1.appendChild(p1);

            const p2 = document.createElement("p");
            p2.innerHTML = `<span><b>Status:</b></span> ${remDay}`;
            div1.appendChild(p2);

            div.appendChild(div1);

            const div2 = document.createElement("div");
            div2.classList.add("checkingInp");

            const input = document.createElement("input");
            input.type = "checkbox";
            input.name = "checkTask";
            input.id = "checkTask";
            input.setAttribute("disabled", "true");
            div2.appendChild(input);

            const label = document.createElement("label");
            label.textContent = "Mark as completed.";
            div2.appendChild(label);
            div.appendChild(div2);

            const hr1 = document.createElement("hr");
            div.appendChild(hr1);

            taskList.appendChild(div);
        }
        else if (remDay === "Completed") {
            const taskList = document.querySelector(".task-list");
            const div = document.createElement("div");
            div.classList.add("card");
            div.setAttribute("style", "color: #14B8A6");
            const h3 = document.createElement("h3");
            h3.classList.add("card-task-name");
            h3.innerHTML = `<span>Task:</span> ${task}`;
            div.appendChild(h3);

            const hr = document.createElement("hr");
            div.appendChild(hr);

            const div1 = document.createElement("div");
            div1.classList.add("info");

            const p = document.createElement("p");
            p.innerHTML = `<span><b>Priority:</b></span> ${priority}`;
            if (priority === "high") {
                p.setAttribute("style", "color: orange");
              } else if (priority === "mid") {
                p.setAttribute("style", "color: yellow");
              } else {
                p.setAttribute("style", "color: red");
              }
            div1.appendChild(p);

            const p1 = document.createElement("p");
            p1.innerHTML = `<span><b>Due Date:</b></span> ${dueDate}`;
            div1.appendChild(p1);

            const p2 = document.createElement("p");
            p2.innerHTML = `<span><b>Status:</b></span> ${remDay}`;
            div1.appendChild(p2);

            div.appendChild(div1);

            const div2 = document.createElement("div");
            div2.classList.add("checkingInp");

            const input = document.createElement("input");
            input.type = "checkbox";
            input.name = "checkTask";
            input.id = "checkTask";
            input.setAttribute("disabled", "true");
            div2.appendChild(input);

            const label = document.createElement("label");
            label.textContent = "Mark as completed.";
            div2.appendChild(label);
            div.appendChild(div2);

            const hr1 = document.createElement("hr");
            div.appendChild(hr1);

            taskList.appendChild(div);
        }
        else {
            const taskList = document.querySelector(".task-list");
            const div = document.createElement("div");
            div.classList.add("card");
            const h3 = document.createElement("h3");
            h3.classList.add("card-task-name");
            h3.innerHTML = `<span>Tasks:</span> ${task}`;
            div.appendChild(h3);

            const hr = document.createElement("hr");
            div.appendChild(hr);

            const div1 = document.createElement("div");
            div1.classList.add("info");

            const p = document.createElement("p");
            p.innerHTML = `<span><b>Priority:</b></span> ${priority}`;
            if (priority === "high") {
                p.setAttribute("style", "color: orange");
              } else if (priority === "mid") {
                p.setAttribute("style", "color: yellow");
              } else {
                p.setAttribute("style", "color: red");
              }
            div1.appendChild(p);

            const p1 = document.createElement("p");
            p1.innerHTML = `<span><b>Due Date:</b></span> ${dueDate}`;
            div1.appendChild(p1);

            const p2 = document.createElement("p");
            p2.innerHTML = `<span><b>Status:</b></span> ${remDay}`;
            div1.appendChild(p2);

            div.appendChild(div1);

            const div2 = document.createElement("div");
            div2.classList.add("checkingInp");

            const input = document.createElement("input");
            input.type = "checkbox";
            input.name = "checkTask";
            input.id = "checkTaskActive";
            input.setAttribute("data-id", taskId)
            div2.appendChild(input);

            const label = document.createElement("label");
            label.textContent = "Mark as completed.";
            div2.appendChild(label);
            div.appendChild(div2);

            const hr1 = document.createElement("hr");
            div.appendChild(hr1);

            const div3 = document.createElement("div");
            div3.classList.add("card-btn");
            const btn1 = document.createElement("button");
            btn1.classList.add("update-btn");
            btn1.textContent = "Update";
            div3.appendChild(btn1);

            const btn2 = document.createElement("button");
            btn2.classList.add("delete-btn");
            btn2.textContent = 'Delete';
            div3.appendChild(btn2);

            div.appendChild(div3);

            taskList.appendChild(div);
        }
    }

    const storedTask = JSON.parse(localStorage.getItem("Tasks")) || [];

  const storedTasks = () => {
    storedTask.map((task) => {
      if (task.remDay !== "Expired" && task.remDay !== "Completed") {
        cards(task.id, task.task, task.priority, task.dueDate, task.remDay);
      }
    });
  };

  const filteredTask = () => {
    storedTask.forEach((task) => {
      if (task.remDay === "Due today") {
        cards(task.id, task.task, task.priority, task.dueDate, task.remDay);
      }
    });
  };

  const filteredTaskOnPriority = () => {
    storedTask.forEach((task) => {
      if (
        task.priority === "high" &&
        task.remDay !== "Expired" &&
        task.remDay !== "Completed" &&
        new Date(task.dueDate).toLocaleDateString() ===
          new Date().toLocaleDateString()
      ) {
        cards(task.id, task.task, task.priority, task.dueDate, task.remDay);
      }
    });
  };

  const filteredTaskOnComplete = () => {
    storedTask.forEach((task) => {
      if (
        task.remDay === "Completed" &&
        new Date(task.dueDate).toLocaleDateString() ===
          new Date().toLocaleDateString()
      ) {
        cards(task.id, task.task, task.priority, task.dueDate, task.remDay);
      }
    });
  };

  const filteredTaskOnExpired = () => {
    storedTask.forEach((task) => {
      if (task.remDay === "Expired") {
        cards(task.id, task.task, task.priority, task.dueDate, task.remDay);
      }
    });
  };

  

  return {
    storedTasks,
    filteredTask,
    filteredTaskOnPriority,
    filteredTaskOnComplete,
    filteredTaskOnExpired,
  };
    
})();