import { calculateRound } from "./functions.js";

const options = document.querySelectorAll(".option");
const outcome = document.querySelector(".outcome");

options.forEach((option) => {
    option.addEventListener("click", () => {
        calculateRound(option, outcome);
    });
});
