// modal
let modal = document.querySelector(".modal");
let rulesBtn = document.getElementById("rulesBtn");
let closeButton = document.getElementById("icon-close");

rulesBtn.addEventListener("click", () => {
    modal.classList.toggle("show-modal");
});

closeButton.addEventListener("click", () => {
    modal.classList.remove("show-modal");
});





// -----------------------------------
//         G      A     M     E
// -----------------------------------

const randomWeapon = () => {
    let i = Math.round(Math.random() * 2);
    houseChoice = weapons[i];
    return houseChoice;
}

const whoWins = (user, cpu) => {
    if (user === "rock" && cpu === "paper") {
        return "cpu";
    }
    else if (user === "rock" && cpu === "scissors") {
        return "user";
    }
    else if (user === "rock" && cpu === "rock") {
        return "draw";
    }
    else if (user === "scissors" && cpu === "rock") {
        return "cpu";
    }
    else if (user === "scissors" && cpu === "paper") {
        return "user";
    }
    else if (user === "scissors" && cpu === "scissors") {
        return "draw"
    }
    else if (user === "paper" && cpu === "scissors") {
        return "cpu"
    }
    else if (user === "paper" && cpu === "rock") {
        return "user"
    }
    else if (user === "paper" && cpu === "paper") {
        return "draw";
    }
}
