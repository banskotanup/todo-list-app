export const addTask = (() => {
    let tasksArrObj = JSON.parse(localStorage.getItem("Tasks")) || [];
    function Tasks(task, priority, dueDate, remDay) {
        if (!new.target) {
            throw "You should use new in constructor."
        }
    
        this.id = crypto.randomUUID();
        this.task = task;
        this.priority = priority;
        this.dueDate = dueDate;
        this.remDay = remDay;
    }
    
    function addTasks(task, priority, dueDate, remDay) {
        const newTask = new Tasks(task, priority, dueDate, remDay);
        tasksArrObj.push(newTask);
        localStorage.setItem("Tasks", JSON.stringify(tasksArrObj));
    }
    
    const addTaskBtn = document.querySelector(".addTaskBtn");
    
    const addBtnTask = () => {
        addTaskBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const inpTask = document.querySelector("#task").value;
            const priority = document.querySelector("#priority").value;
            const dueDate = document.querySelector('#dueDate').value;
            addTasks(inpTask, priority, dueDate, 1);
            location.reload();
        })
    }

    return { addBtnTask, tasksArrObj };
})();