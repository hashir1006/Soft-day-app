window.addEventListener("load", () => {
  bondScreen.classList.remove("hidden");
  appScreen.classList.add("hidden");
  lonelyMode.classList.add("hidden");
  document.body.classList.remove("slow-motion");
});

const bondBtn = document.getElementById("bondBtn");
const bondScreen = document.getElementById("bondScreen");
const appScreen = document.getElementById("appScreen");

const lonelyMode = document.getElementById("lonelyMode");
const lonelyLine = document.getElementById("lonelyLine");

let softMessage;
let catPet;

const moods = ["calm", "sad", "lonely", "warm"];
let moodIndex = 0;

const moodTexts = {
  calm: "Let’s stay here for a moment.",
  sad: "It’s okay to feel heavy sometimes.",
  lonely: "You’re not alone in this moment Rani.",
  warm: "There’s a little warmth here."
};

const lonelyMessages = [
  "Hey…",
  "Loneliness doesn’t mean you’re unloved Rani Ji.",
  "It just means you’re a Good and pure soul.",
  "I’m here Rani. Take your time."
];

let lonelyIndex = 0;

bondBtn.addEventListener("click", () => {
  if (!userName.value || !machineName.value) {
    alert("Please fill both names.");
    return;
  }

  bondScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");

  softMessage = document.getElementById("softMessage");
  catPet = document.getElementById("catPet");

  softMessage.innerText = "I'm here Rani ji. Take your time.";
});

function rotateMood() {
  const wheel = document.querySelector(".mood-wheel");
  moodIndex = (moodIndex + 1) % moods.length;

  wheel.style.transform = `rotate(${moodIndex * 90}deg)`;

  const mood = moods[moodIndex];
  softMessage.innerText = moodTexts[mood];

  document.getElementById("wheelLabel").innerText = mood;

  catPet.src =
    mood === "sad" || mood === "lonely"
      ? "cat-sad.svg"
      : "cat-soft.svg";
}

function enterLonelyMode() {
  document.body.classList.add("slow-motion");
  lonelyMode.classList.remove("hidden");
  document.querySelector(".cat-wrapper").classList.add("close");

  lonelyIndex = 0;
  lonelyLine.innerText = lonelyMessages[lonelyIndex];
}

function stayHere() {
  lonelyIndex++;
  if (lonelyIndex < lonelyMessages.length) {
    lonelyLine.innerText = lonelyMessages[lonelyIndex];
  }
}

function exitLonely() {
  document.body.classList.remove("slow-motion");
  lonelyMode.classList.add("hidden");
  document.querySelector(".cat-wrapper").classList.remove("close");
}
