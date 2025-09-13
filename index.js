function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (username === "UV" && password === "2") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
    error.style.display = "none"; // hide error on success
  } else {
    error.style.display = "block";
  }
}

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("show");
}
// Quiz Questions
const quizData = [
  { q: "Where did we first meet?", options: ["Kitchen", "JB South", "21 Kompas"], answer: "21 Kompas" },
  { q: "What was our first date?", options: ["Picnic", "Movies", "Restaurant"], answer: "Picnic" },
  { q: "Where do we want to go together soon?", options: ["Paris", "Hawaii", "Bali"], answer: "Hawaii" },
  { q: "When was our first kiss?", options: ["At the park", "Outside near the fire", "In the car"], answer: "Outside near the fire" },
  { q: "What's our favorite thing we have in common?", options: ["Cooking", "Travelling", "Music"], answer: "Travelling" },
  { q: "What is our child’s name?", options: ["Fluffy", "Bubbles", "Snowy"], answer: "Bubbles" },
  { q: "Why did I fall for you?", options: ["Your smile", "Your kindness","Your eyes", "All of the above"], answer: "All of the above" },
  { q: "What’s my favorite nickname for you?", options: ["Baby", "Love", "Babygirl"], answer: "Babygirl" },
  { q: "What do I love most about you?", options: ["Your heart", "Your laugh", "Everything"], answer: "Everything" }
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  const questionData = quizData[currentQ];

  quizContainer.innerHTML = `
    <h3>${questionData.q}</h3>
    ${questionData.options.map(opt => `
      <button class="quiz-option" onclick="selectOption('${opt}')">${opt}</button>
    `).join("")}
  `;
}

function selectOption(choice) {
  const correct = quizData[currentQ].answer;
  if (choice === correct) score++;

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  currentQ++;
  document.getElementById("nextBtn").style.display = "none";

  if (currentQ < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("quiz-result").classList.remove("hidden");
    document.getElementById("quiz-result").innerHTML = 
      `💖 You scored ${score}/${quizData.length}! <br> That’s how much you know about our love story 😘`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
});
// Login Function
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (username === "UV" && password === "2") {
    // Store login in localStorage
    localStorage.setItem("isLoggedIn", "true");
    
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
    error.style.display = "none"; // hide error on success
  } else {
    error.style.display = "block";
  }
}

// Check on page load if already logged in
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
  }
});
