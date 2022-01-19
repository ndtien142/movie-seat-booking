const count = document.getElementById("count");
const total = document.getElementById("total");
const seatMovie = document.querySelectorAll(".row .seat:not(.occupied)");
const movieSelect = document.getElementById("movie");
const container = document.querySelector(".container");
const submit = document.getElementById("submit");
const priceCheckout = document.querySelector("#submit .total-price");
// Get ticket Price
let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedCount = selectedSeats.length;

  count.innerText = selectedCount;
  total.innerText = `$${selectedCount * ticketPrice}`;
  priceCheckout.innerText = `$${selectedCount * ticketPrice}`;
}

// Change ticket price
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});
// Select seat
container.addEventListener("click", (e) => {
  if (
    !e.target.classList.value.includes("occupied") &&
    e.target.classList.value.includes("seat")
  ) {
    e.target.classList += " selected";
    updateSelectedCount();
  }
});

submit.addEventListener("click", (e) => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  selectedSeats.forEach((element) => {
    element.classList = "seat occupied";
  });
  count.innerText = 0;
  total.innerText = `$0`;
  priceCheckout.innerText = `$0`;
  console.log("submit");
});
