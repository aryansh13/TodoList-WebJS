const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const lisText = input.value;

    if(lisText) {
        const lisEl = document.createElement("li");
        lisEl.innerText = lisText;
        
        lisEl.addEventListener("click", () => {
            lisEl.classList.toggle('completed')
        });
        
        lisEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            lisEl.remove(); 
        })

        list.appendChild(lisEl);
        input.value = "";
    }
});