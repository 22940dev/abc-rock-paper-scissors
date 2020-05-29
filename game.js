// img.src = "images/icon-rock.svg";
let choice = "";
let score = 0;
let stageOne = document.querySelector(".stage-1");
let stageTwo = document.querySelector(".stage-2");
let paperWrapper = document.getElementById("paper-click");
let scissorsWrapper = document.getElementById("scissors-click");
let rockWrapper = document.getElementById("rock-click");
let wrapper = document.querySelector(".wrapper");
let weapon = document.querySelector(".weapon");
let weaponImg = document.getElementById("weaponImg");

// TODO: ADD SOUND WHEN DONE

paperWrapper.addEventListener("click", ()=> {
    choice = "paper";
    stageOne.style.display = "none";
    wrapper.classList.add("paper-wrapper");
    weapon.classList.add("paper");
    weaponImg.classList.add("paperImg");
    weaponImg.src = "images/icon-paper.svg";
    stageTwo.style.display = "block";
});

scissorsWrapper.addEventListener("click", ()=> {
    choice = "scissors";
    stageOne.style.display = "none";
    wrapper.classList.add("scissors-wrapper");
    weapon.classList.add("scissors");
    stageTwo.style.display = "block";
});

rockWrapper.addEventListener("click", ()=> {
    choice = "rock";
    stageOne.style.display = "none";
    wrapper.classList.add("rock-wrapper");
    weapon.classList.add("rock");
    stageTwo.style.display = "block";
});
