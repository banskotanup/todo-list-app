export const allTasksInp = (() => {
    const allTaskInp = () => {
        const form = document.createElement("form");
        const label1 = document.createElement("label");
        const inputTask = document.createElement("input");
        inputTask.type = "text";
        inputTask.name = "task";
        inputTask.id = "task";
        inputTask.placeholder = "What's on your mind today?"
        label1.appendChild(inputTask);
        form.appendChild(label1);

        const div = document.createElement("div");
        div.classList.add("select-wrapper");
        const select = document.createElement("select");
        select.name = "priority";
        select.id = "priority";
        const opt1 = document.createElement("option");
        opt1.value = "high";
        opt1.textContent = "High";
        select.appendChild(opt1);
        const opt2 = document.createElement("option");
        opt2.value = "mid";
        opt2.textContent = "Mid";
        select.appendChild(opt2);
        const opt3 = document.createElement("option");
        opt3.value = "low";
        opt3.textContent = "Low";
        select.appendChild(opt3);
        div.appendChild(select);
        const i = document.createElement("i");
        i.classList.add("fas", "fa-angle-down");
        div.appendChild(i);
        form.appendChild(div);

        const label2 = document.createElement("label");
        const input2 = document.createElement("input");
        input2.type = "date";
        input2.name = "dueDate";
        input2.id = "dueDate";
        label2.appendChild(input2);
        form.appendChild(label2);

        const btn = document.createElement("button");
        btn.type = "submit";
        btn.classList.add("addTaskBtn");
        btn.textContent= "Add task";
        form.appendChild(btn);

        return { form, inputTask, select, input2, btn };
    }
    return { allTaskInp };
})();