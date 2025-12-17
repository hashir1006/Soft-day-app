// Elements
const bondBtn = document.getElementById("bondBtn");
const bondScreen = document.getElementById("bondScreen");
const appScreen = document.getElementById("appScreen");

const lonelyMode = document.getElementById("lonelyMode");
const lonelyLine = document.getElementById("lonelyLine");

// State
let softMessage;
let catPet;
let lonelyIndex = 0;

// Messages for loneliness mode
const lonelyMessages = [
  "Hey…",
  "Loneliness doesn’t mean you’re unloved.",
  "It just means you’re human.",
  "I’m here. You don’t have to rush."
];

// Bond screen logic
bondBtn.addEventListener("click", () => {
  const user = document.getElementById("userName").value.trim();
  const machine = document.getElementById("machineName").value.trim();

  if (!user || !machine) {
    alert("Please fill both names.");
    return;
  }

  // Save names (used emotionally, not spammed)
  localStorage.setItem("softdays_user", user);
  localStorage.setItem("softdays_machine", machine);

  // Transition to app
  bondScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");

  // Cache elements AFTER app screen is visible
  softMessage = document.getElementById("softMessage");
  catPet = document.getElementById("catPet");

  // Gentle intro
  softMessage.innerText = "I'm here. Take your time.";
});

// Mood handling
function setMood(mood) {
  if (!softMessage || !catPet) return;

  const messages = {
    calm: "Let’s stay here for a moment.",
    sad: "It’s okay to feel heavy sometimes.",
    lonely: "You’re not alone in this moment.",
    warm: "There’s a little warmth here."
  };

  softMessage.innerText = messages[mood];

  if (mood === "sad" || mood === "lonely") {
    catPet.src = "cat-sad.svg";
  } else {
    catPet.src = "cat-soft.svg";
  }
}

// Enter loneliness comfort mode
function enterLonelyMode() {
  document.body.classList.add("slow-motion");
  lonelyMode.classList.remove("hidden");

  const catWrapper = document.querySelector(".cat-wrapper");
  if (catWrapper) catWrapper.classList.add("close");

  lonelyIndex = 0;
  lonelyLine.innerText = lonelyMessages[lonelyIndex];
}

// Stay button logic
function stayHere() {
  lonelyIndex++;
  if (lonelyIndex < lonelyMessages.length) {
    lonelyLine.innerText = lonelyMessages[lonelyIndex];
  }
}

// Exit loneliness mode
function exitLonely() {
  document.body.classList.remove("slow-motion");
  lonelyMode.classList.add("hidden");

  const catWrapper = document.querySelector(".cat-wrapper");
  if (catWrapper) catWrapper.classList.remove("close");
}
