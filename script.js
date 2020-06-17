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
//         G     A     M     E
// -----------------------------------

// local storage
if (!localStorage.getItem("score")) {
    localStorage.getItem("score", 0);
}
// initializing game components
let paper = document.querySelector("#paper-click");
let scissors = document.querySelector("#scissors-click");
let rock = document.querySelector("#rock-click");
let weapons = ["rock", "paper", "scissors"];
let choice;
let houseChoice;
let stepOne = document.querySelector(".step-1");
let stepTwoThreeFour = document.querySelector(".step-2-3-4");
let loseWin = document.querySelector(".lose-win");
let displayWinnerTimeout;
let outcome = document.querySelector(".outcome");
let playAgainBtn = document.getElementById("playAgain");
let score = document.getElementById("score");
score.textContent = localStorage.getItem("score");
let points = localStorage.getItem("score");

// user components
let wrapper = document.querySelector(".user-wrapper");
let weapon = document.querySelector(".user-weapon");
let userWeaponImg = document.querySelector(".userWeapon");

// house components
let houseWrapper = document.querySelector(".house-wrapper");
let houseWeapon = document.querySelector(".house-weapon");
let houseWeaponImg = document.querySelector(".houseWeapon");
let houseTimeout;
let unkown = document.querySelector(".unknown");

// reset the game to step 1
const resetGame = () => {
    stepTwoThreeFour.style.display = "none";
    loseWin.style.display = "none";
    stepOne.style.display = "block";
    unkown.style.display = "block";
    houseWrapper.id = ``;
    houseWeapon.id = ``;
    houseWeaponImg.id = ``;
    houseWeaponImg.src = ``;
    playAgainBtn.style.color = "";
}

// event listeners
paper.addEventListener("click", () => {
    choice = "paper";
    houseChoice = randomWeapon();
    initUser(choice);
    initHouse(houseChoice);
    winner = whoWins(choice, houseChoice);
    displayWinner(winner);
});

rock.addEventListener("click", () => {
    choice = "rock";
    houseChoice = randomWeapon();
    initUser(choice);
    initHouse(houseChoice);
    winner = whoWins(choice, houseChoice);
    displayWinner(winner);
});

scissors.addEventListener("click", () => {
    choice = "scissors";
    houseChoice = randomWeapon();
    initUser(choice);
    initHouse(houseChoice);
    winner = whoWins(choice, houseChoice);
    displayWinner(winner);
});

playAgainBtn.addEventListener("click", resetGame);

// initializes the choice made by the user
const initUser = (choice) => {
    stepOne.style.display = "none";
    stepTwoThreeFour.style.display = "flex";
    wrapper.id = `${choice}-wrapper`;
    weapon.id = `${choice}`;
    userWeaponImg.id = `${choice}Img`;
    userWeaponImg.src = `images/icon-${choice}.svg`;
}

// initializes the random choice made by the house
const initHouse = (houseChoice) => {
    houseTimeout = setTimeout(() => {
        unkown.style.display = "none";
        houseWrapper.id = `${houseChoice}-wrapper`;
        houseWeapon.id = `${houseChoice}`;
        houseWeaponImg.id = `${houseChoice}Img`;
        houseWeaponImg.src = `images/icon-${houseChoice}.svg`;
    }, 2000);
}

// function that displays the winner of the game
const displayWinner = (winner) => {
    displayWinnerTimeout = setTimeout(() => {
        loseWin.style.display = "block";
        if (winner === "user") {
            outcome.textContent = "you win";
            ++points;
            score.textContent = points;
            localStorage.setItem("score", points);
        } else if (winner == "cpu") {
            outcome.textContent = "THE HOUSE WINS";
            playAgainBtn.style.color = "red";
            --points;
            localStorage.setItem("score", points);
            score.textContent = points;
        } else {
            outcome.textContent = "IT'S A DRAW";
        }
    }, 2000);
}


// a function that randomly selects a weapon 
const randomWeapon = () => {
    let i = Math.round(Math.random() * 2);
    houseChoice = weapons[i];
    return houseChoice;
}

// function that decides outcome of the battle
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
