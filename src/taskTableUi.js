export const taskTableUi = (() => {
    function taskTbl(taskId, task, priority, dueDate, remDay) {
        if (remDay === "Expired") {
            const table = document.querySelector("table");
    
            const taskTable = document.createElement("tr");
            taskTable.classList.add("expired");
            taskTable.setAttribute("style", "color: #6B7283")
        table.appendChild(taskTable);
    
        const td1 = document.createElement("td")
    
        const inpCheckBox = document.createElement("input");
        inpCheckBox.type = "checkbox";
        inpCheckBox.name = "checkTask";
        inpCheckBox.id = "checkTask";
        inpCheckBox.setAttribute("disabled", "true");
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
            const viewBtn = document.createElement("button");
            viewBtn.classList.add("view-btn");
        viewBtn.textContent = "View task";
        td6.appendChild(viewBtn);
    
        taskTable.appendChild(td6);
        }
        else if(remDay === "Completed"){
        const table = document.querySelector("table");
    
            const taskTable = document.createElement("tr");
            taskTable.setAttribute("style", "color: #14B8A6")
        table.appendChild(taskTable);
    
        const td1 = document.createElement("td")
    
        const inpCheckBox = document.createElement("input");
        inpCheckBox.type = "checkbox";
        inpCheckBox.name = "checkTask";
            inpCheckBox.id = "completedTask";
            inpCheckBox.setAttribute("data-id", taskId);
                inpCheckBox.checked = true;
            inpCheckBox.setAttribute("disabled", "true");
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
            const viewBtn = document.createElement("button");
            viewBtn.classList.add("view-btn");
        viewBtn.textContent = "View task";
        td6.appendChild(viewBtn);
    
        taskTable.appendChild(td6);
        }
        else{
        const table = document.querySelector("table");
    
        const taskTable = document.createElement("tr");
        table.appendChild(taskTable);
    
        const td1 = document.createElement("td")
    
        const inpCheckBox = document.createElement("input");
        inpCheckBox.type = "checkbox";
        inpCheckBox.name = "checkTask";
            inpCheckBox.id = "checkTaskActive";
            inpCheckBox.setAttribute("data-id", taskId);
        td1.appendChild(inpCheckBox);
        taskTable.appendChild(td1);
    
        const td2 = document.createElement("td");
        td2.textContent = task;
        taskTable.appendChild(td2);
    
        const td3 = document.createElement("td");
        td3.textContent = priority;
        if (priority === 'high') {
            td3.setAttribute("style", "color: darkorange");
        }
        else if (priority === 'mid') {
            td3.setAttribute("style", "color: yellow");
        }
        else{
            td3.setAttribute("style", "color: red");
        }
        taskTable.appendChild(td3);
    
        const td4 = document.createElement("td");
        td4.textContent = dueDate;
        taskTable.appendChild(td4);
    
        const td5 = document.createElement("td");
        td5.textContent = remDay;
        taskTable.appendChild(td5);
    
        const td6 = document.createElement("td");
            const updateBtn = document.createElement("button");
            updateBtn.classList.add("update-btn")
        updateBtn.textContent = "Update";
        td6.appendChild(updateBtn);
    
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        td6.appendChild(deleteBtn);
    
        taskTable.appendChild(td6);
        }
    }
    
    const storedTask = JSON.parse(localStorage.getItem("Tasks")) || [];
    
    const storedTasks = () => {
        storedTask.map((task) => {
            if (task.remDay !== "Expired" && task.remDay !== "Completed") {
                taskTbl(task.id, task.task, task.priority, task.dueDate, task.remDay);
            }
        }
        );
    }

    const filteredTask = () => {
        storedTask.forEach((task) => {
            if (task.remDay === "Due today") {
                taskTbl(task.id, task.task, task.priority, task.dueDate, task.remDay);
            }
        })
    }

    const filteredTaskOnPriority = () => {
        storedTask.forEach((task) => {
            if (task.priority === "high" && task.remDay !== "Expired" && task.remDay !== "Completed") {
                taskTbl(task.id, task.task, task.priority, task.dueDate, task.remDay);
            }
        })
    }

    const filteredTaskOnComplete = () => {
        storedTask.forEach((task) => {
            if (task.remDay === "Completed" && new Date(task.dueDate).toLocaleDateString() === new Date().toLocaleDateString()) {
                taskTbl(task.id, task.task, task.priority, task.dueDate, task.remDay);
            }
        })
    }

    const filteredTaskOnExpired = () => {
        storedTask.forEach((task) => {
            if (task.remDay === "Expired") {
                taskTbl(task.id, task.task, task.priority, task.dueDate, task.remDay);
            }
        })
    }
    

    return { storedTasks, filteredTask, filteredTaskOnPriority, filteredTaskOnComplete, filteredTaskOnExpired };
})();