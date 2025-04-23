export const initDialog = (() => {
    
    const initDOMLoad = () => {
        document.addEventListener("DOMContentLoaded", () => {
            const initNameInp = document.querySelector(".initNameInp");
            
            const getLocalUser = localStorage.getItem("userName");
            
            if (!getLocalUser) {
                initNameInp.showModal();
                document.querySelector("body").classList.add("blur");
            }

            const initNameSubmit = document.querySelector(".initNameSubmit");

            initNameSubmit.addEventListener("click", (e) => {
                e.preventDefault();
                const userName = document.querySelector("#name").value;
                localStorage.setItem("userName", userName);
                document.querySelector("body").classList.remove("blur");
                initNameInp.close();
                location.reload();
            }); 
            
            const docUsername = document.querySelector(".userName");
            docUsername.textContent = getLocalUser;

            const mobDocUsername = document.querySelector(".mobUserName");
            mobDocUsername.textContent = getLocalUser;
            
        });
    }

    return { initDOMLoad };
})();