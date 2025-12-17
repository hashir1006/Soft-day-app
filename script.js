window.addEventListener("load", () => {
  document.getElementById("bondScreen").classList.remove("hidden");
  document.getElementById("appScreen").classList.add("hidden");
  document.getElementById("lonelyMode").classList.add("hidden");
  document.body.classList.remove("slow-motion");
});

const bondBtn = document.getElementById("bondBtn");
const lonelyMode = document.getElementById("lonelyMode");
const lonelyLine = document.getElementById("lonelyLine");

let softMessage;
let catPet;
let lonelyIndex = 0;

const lonelyMessages = [
  "Hey…",
  "Loneliness doesn’t mean you’re unloved.",
  "It just means you’re human.",
  "I’m here. Take your time."
];

bondBtn.addEventListener("click", () => {
  const user = document.getElementById("userName").value.trim();
  const machine = document.getElementById("machineName").value.trim();
  if (!user || !machine) {
    alert("Please fill both names.");
    return;
  }
  document.getElementById("bondScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.remove("hidden");

  softMessage = document.getElementById("softMessage");
  catPet = document.getElementById("catPet");
  softMessage.innerText = "I'm here. Take your time.";
});

function setMood(mood) {
  const messages = {
    calm: "Let’s stay here for a moment.",
    sad: "It’s okay to feel heavy sometimes.",
    lonely: "You’re not alone in this moment.",
    warm: "There’s a little warmth here."
  };
  softMessage.innerText = messages[mood];
  catPet.src = (mood === "sad" || mood === "lonely") ? "cat-sad.svg" : "cat-soft.svg";
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
