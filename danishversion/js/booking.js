var afventedeBtn = document.getElementById("afventedeBtn");
var bekræftedeBtn = document.getElementById("bekræftedeBtn");
var afventedeBooking = document.getElementById("afventedeBookings");
var bekræftedeBooking = document.getElementById("bekræftedeBooking");
function bekræftedeBook() {
  bekræftedeBtn.classList.add("current");
  afventedeBtn.classList.remove("current");
  afventedeBooking.style.display = "none";
  bekræftedeBooking.style.display = "flex";
}
function afventedeBook() {
  bekræftedeBtn.classList.remove("current");
  afventedeBtn.classList.add("current");
  afventedeBooking.style.display = "flex";
  bekræftedeBooking.style.display = "none";
}
