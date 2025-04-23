export const taskTableUi = (() => {
    function taskTbl(task, priority, dueDate, remDay) {
        const table = document.querySelector("tbody");
    
        const taskTable = document.createElement("tr");
        table.appendChild(taskTable);
    
        const td1 = document.createElement("td")
    
        const inpCheckBox = document.createElement("input");
        inpCheckBox.type = "checkbox";
        inpCheckBox.name = "checkTask";
        inpCheckBox.id = "checkTask";
        td1.appendChild(inpCheckBox);
        taskTable.appendChild(td1);
    
        const td2 = document.createElement("td");
        td2.textContent = task;
        taskTable.appendChild(td2);
    
        const td3 = document.createElement("td");
        td3.textContent = priority;
        taskTable.appendChild(td3);
    
        const td4 = document.createElement("td");
        td4.textContent = dueDate;
        taskTable.appendChild(td4);
    
        const td5 = document.createElement("td");
        td5.textContent = remDay;
        taskTable.appendChild(td5);
    
        const td6 = document.createElement("td");
        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        td6.appendChild(updateBtn);
    
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        td6.appendChild(deleteBtn);
    
        taskTable.appendChild(td6);
    }
    
    const storedTask = JSON.parse(localStorage.getItem("Tasks")) || [];
    
    const storedTasks = () => {
        storedTask.map((task) => {
            taskTbl(task.task, task.priority, task.date, 1);
        }
        );
    }

    return { storedTasks };
})();