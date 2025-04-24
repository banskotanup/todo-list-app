export const allTasksList = (() => {
    const allTaskList = () => {
        const tr = document.createElement('tr');

        const th1 = document.createElement('th');
        th1.textContent = "";
        tr.appendChild(th1);

        const th2 = document.createElement('th');
        th2.textContent = "Tasks";
        tr.appendChild(th2);

        const th3 = document.createElement('th');
        th3.textContent = "Priority";
        tr.appendChild(th3);

        const th4 = document.createElement('th');
        th4.textContent = "Due Date";
        tr.appendChild(th4);

        const th5 = document.createElement('th');
        th5.textContent = "Status";
        tr.appendChild(th5);

        const th6 = document.createElement('th');
        th6.textContent = "Action";
        tr.appendChild(th6);


        return { tr };
    }
    return { allTaskList };
})();