let modal = document.querySelector(".modal");
let rulesBtn = document.getElementById("rulesBtn");
let closeButton = document.getElementById("icon-close");

rulesBtn.addEventListener("click", ()=> {
    modal.classList.toggle("show-modal");
});

closeButton.addEventListener("click", ()=> {
    modal.classList.remove("show-modal");
});
