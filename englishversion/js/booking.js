var afventedeBtn = document.getElementById("afventedeBtn");
var bekræftedeBtn = document.getElementById("bekræftedeBtn");
var afventedeBooking = document.getElementById("afventedeBookings");
var bekræftedeBooking = document.getElementById("bekræftedeBooking");
var samtaleSectionJonas = document.getElementById("samtaleJonasSvanegaard");
var samtaleSectionWinnie = document.getElementById("samtaleWinnieAndersen");
function bekræftedeBook() {
  bekræftedeBtn.classList.add("current");
  afventedeBtn.classList.remove("current");
  afventedeBooking.style.display = "none";
  bekræftedeBooking.style.display = "flex";
  if (
    (samtaleSectionJonas.style.display = "flex") ||
    (samtaleSectionWinnie.style.display = "flex")
  ) {
    samtaleSectionJonas.style.display = "none";
    samtaleSectionWinnie.style.display = "none";
  }
}
function afventedeBook() {
  bekræftedeBtn.classList.remove("current");
  afventedeBtn.classList.add("current");
  afventedeBooking.style.display = "flex";
  bekræftedeBooking.style.display = "none";
  if (
    (samtaleSectionJonas.style.display = "flex") ||
    (samtaleSectionWinnie.style.display = "flex")
  ) {
    samtaleSectionJonas.style.display = "none";
    samtaleSectionWinnie.style.display = "none";
  }
}
function samtaleJonas() {
  afventedeBooking.style.display = "none";
  bekræftedeBooking.style.display = "none";
  samtaleSectionJonas.style.display = "flex";
}
function samtaleWinnie() {
  afventedeBooking.style.display = "none";
  bekræftedeBooking.style.display = "none";
  samtaleSectionWinnie.style.display = "flex";
}
function confirmBooking() {
  window.location.href = "DAbookingconfirmLED.html";
}
function backToBooking() {
  window.location.href = "DAbookingsLED.html";
}
