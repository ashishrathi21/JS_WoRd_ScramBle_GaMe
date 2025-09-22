const wordBank = [
  "apple",
  "banana",
  "orange",
  "grapes",
  "strawberry",
  "mango",
  "pineapple",
  "watermelon",
  "kiwi",
  "papaya",
  "blueberry",
  "cherry",
  "pomegranate",
  "coconut",
  "fig"
];

let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let shuffleWord = randomWord.split("").sort(() => Math.random() - 0.5);

const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const time = document.querySelector(".sec");
const guessInput = document.querySelector(".guess");
const checkbtn = document.querySelector(".check");
const refreshbtn = document.querySelector(".refresh");

h1.textContent = shuffleWord.join("").toUpperCase();

let count = 30;
let intervalId;


function startTimer() {
  clearInterval(intervalId); 
  intervalId = setInterval(() => {
    if (count > 0) {
      count--;
      time.textContent = `${count} sec`;
    } else {
      clearInterval(intervalId);
      time.style.color = "red";
      time.textContent = "Time is Over";
      h3.style.color = "red";
      h3.textContent = "Click on refresh";
    }
  }, 1000);
}

startTimer();

checkbtn.addEventListener("click", () => {
  if (guessInput.value.toLowerCase() === randomWord) {
    h3.style.color = "green";
    h3.textContent = "Correct Word";

    setTimeout(() => {
      guessInput.value = "";
      h3.textContent = "";
    }, 2000);

    
    count = 30;
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    shuffleWord = randomWord.split("").sort(() => Math.random() - 0.5);
    h1.textContent = shuffleWord.join("").toUpperCase();
    time.style.color = "#7e7e7e";
    time.textContent = "30 sec";
    startTimer();
  }
});

refreshbtn.addEventListener("click", () => {
  h3.textContent = "";
  count = 30;
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  shuffleWord = randomWord.split("").sort(() => Math.random() - 0.5);
  h1.textContent = shuffleWord.join("").toUpperCase();
  time.style.color = "#7e7e7e";
  time.textContent = "30 sec";
  startTimer();
});

guessInput.addEventListener("keyup" , function(dets){
  if(dets.key == 'Enter'){
    checkbtn.click()
  }
})