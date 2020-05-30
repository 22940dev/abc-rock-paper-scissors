// img.src = "images/icon-rock.svg";
let choice;
let x;
let points = 0;
let score = document.getElementById("score");
let stageOne = document.querySelector(".stage-1");
let stageTwo = document.querySelector(".stage-2");
let paperWrapper = document.getElementById("paper-click");
let scissorsWrapper = document.getElementById("scissors-click");
let rockWrapper = document.getElementById("rock-click");
let wrapper = document.querySelector(".wrapper");
let weapon = document.querySelector(".weapon");
let weaponImg = document.getElementById("weaponImg");
let houseWrapper = document.querySelector(".house-wrapper");
let houseWeapon = document.querySelector(".house-weapon");
let houseWeaponImg = document.getElementById("houseweaponImg");
let unknown = document.querySelector(".unknown");
let timeOut;
let winner;
let weapons = ["rock", "paper", "scissors"];
// TODO: ADD SOUND WHEN DONE

paperWrapper.addEventListener("click", () => {
    choice = "paper";
    stageOne.style.display = "none";
    wrapper.classList.add("paper-wrapper");
    weapon.classList.add("paper");
    weaponImg.classList.add("paperImg");
    weaponImg.src = "images/icon-paper.svg";
    stageTwo.style.display = "block";
    x = randomWeapon();
    timeOut = setTimeout(displayHouse, 2000, x);
    winner = setTimeout(displayWinner, 2000, choice, x);
});

scissorsWrapper.addEventListener("click", () => {
    choice = "scissors";
    stageOne.style.display = "none";
    wrapper.classList.add("scissors-wrapper");
    weapon.classList.add("scissors");
    weaponImg.classList.add("scissorsImg");
    weaponImg.src = "images/icon-scissors.svg";
    stageTwo.style.display = "block";
    x = randomWeapon();
    timeOut = setTimeout(displayHouse, 2000, x);
    winner = setTimeout(displayWinner, 2000, choice, x);
});

rockWrapper.addEventListener("click", () => {
    choice = "rock";
    stageOne.style.display = "none";
    wrapper.classList.add("rock-wrapper");
    weapon.classList.add("rock");
    weaponImg.classList.add("rockImg");
    weaponImg.src = "images/icon-rock.svg";
    stageTwo.style.display = "block";
    x = randomWeapon();
    timeOut = setTimeout(displayHouse, 2000, x);
    winner = setTimeout(displayWinner, 2000, choice, x);
});

const randomWeapon = () => {
    let i = Math.round(Math.random() * 2);
    houseChoice = weapons[i];
    return houseChoice;
}

const displayHouse = (x) => {
    unknown.style.display = "none";
    houseWrapper.style.display = "block";
    houseWrapper.classList.add(`${x}-wrapper`);
    houseWeapon.classList.add(x);
    houseWeaponImg.classList.add(`${x}Img`);
    houseWeaponImg.src = `images/icon-${x}.svg`;
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

const displayWinner = (choice, x) => {
    if (whoWins(choice, x) === "user") {
        points += 1;
        score.innerText = points;
        alert("You Win");
        stageTwo.style.display = "none";
        stageOne.style.display = "block";
    } else if (whoWins(choice, x) === "cpu") {
        points -= 1
        score.innerText = points;
        alert("The House Wins");
        stageTwo.style.display = "none";
        stageOne.style.display = "block";
    } else if (whoWins(choice, x) === "draw") {
        score.innerText = points;
        alert("It's a draw");
        stageTwo.style.display = "none";
        stageOne.style.display = "block";
    }
}
