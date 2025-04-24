export const addTask = (() => {
    let tasksArrObj = JSON.parse(localStorage.getItem("Tasks")) || [];

    function calcRemDay(dueDate, currentStatus) {
        if (currentStatus === "Completed") return "Completed";
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const due = new Date(dueDate);
        due.setHours(0, 0, 0, 0);

        const diffTime = due - today;

        let days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return days < 0 ? "Expired" : days === 0 ? "Due today" : `${days} days remaining`;
    }

    function Tasks(task, priority, dueDate) {
        if (!new.target) {
            throw "You should use new in constructor."
        }
    
        this.id = crypto.randomUUID();
        this.task = task;
        this.priority = priority;
        this.dueDate = dueDate;
        this.remDay = calcRemDay(this.dueDate);
    }
    
    function addTasks(task, priority, dueDate) {
        const newTask = new Tasks(task, priority, dueDate);
        tasksArrObj.push(newTask);
        localStorage.setItem("Tasks", JSON.stringify(tasksArrObj));
    }

    document.addEventListener("DOMContentLoaded", () => {
        const storedTask = JSON.parse(localStorage.getItem("Tasks")) || [];
        const updateTask = storedTask.map((task) => {
            task.remDay = calcRemDay(task.dueDate, task.remDay);
            return task;
        });
        localStorage.setItem("Tasks", JSON.stringify(updateTask));
    });

    
    const addBtnTask = () => {
        const addTaskBtn = document.querySelector(".addTaskBtn");
        if (!addTaskBtn) return;

        addTaskBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const inpTask = document.querySelector("#task").value;
            const priority = document.querySelector("#priority").value;
            const dueDate = document.querySelector('#dueDate').value;
            
            addTasks(inpTask, priority, dueDate);
            setTimeout(() => location.reload(), 200);
        })
    }

    return { addBtnTask, tasksArrObj };
})();