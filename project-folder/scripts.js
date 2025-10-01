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



// Sample data for each card
const cardDetails = [
  { title: "Customer 1", desc: "This is what our first customer had to say. They care about their customers" },
  { title: "Customer 2", desc: "Second customer says. The are professinals." },
  { title: "Customer 3", desc: "And finally, the details for our third customer. Simply the best" }
];

// Flip card and open modal
function flipCard(cardElement, index) {
  cardElement.classList.toggle("flipped");
  showModal(index);
}

// Reusable function to show modal with content
function showModal(index) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-desc");

  const data = getCardData(index);
  title.textContent = data.title;
  desc.textContent = data.desc;

  modal.classList.add("show");
}

// Function demonstrating parameters and return values
function getCardData(i) {
  return cardDetails[i] || { title: "Unknown", desc: "No data available." };
}

// Close modal
function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

// Example function usage
console.log("Screen Replacement Estimate:", estimateCost("Screen Replacement", 50));
console.log("Battery Replacement Estimate:", estimateCost("Battery Replacement", 50));
