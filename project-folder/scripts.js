//  Functions, Scope, Parameters, Return Values 

// Global variable for clicks
let repairClicks = 0;

// Function with parameters and return value
function estimateCost(service, basePrice) {
  // Example logic: battery is cheaper, screen more expensive
  let multiplier = (service.toLowerCase().includes("screen")) ? 1.5 : 1;
  return basePrice * multiplier;
}

// Local vs global scope demonstration
function logRepairClick() {
  let message = "Repair button clicked!";
  repairClicks++;
  console.log(message, "Total repair requests:", repairClicks);
}

// Reusable function to toggle CSS class
function toggleClass(element, className) {
  element.classList.toggle(className);
}

// Part 3: Integrating CSS + JS for Interactivity
const phoneBox = document.querySelector(".phone-box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  toggleClass(phoneBox, "animate");
  logRepairClick();
});

// Double-click to start pulsing animation
phoneBox.addEventListener("dblclick", () => {
  toggleClass(phoneBox, "pulsing");
});

// Modal logic
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModal = document.getElementById("closeModal");

toggleModalBtn.addEventListener("click", () => {
  modal.classList.toggle("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Example function usage
console.log("Screen Replacement Estimate:", estimateCost("Screen Replacement", 50));
console.log("Battery Replacement Estimate:", estimateCost("Battery Replacement", 50));
