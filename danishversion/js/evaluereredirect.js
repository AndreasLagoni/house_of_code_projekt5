window.onload = function() {
  let mainWrapper = document.getElementById("mainWrapper");
  mainWrapper.style.visibility = "visible";
  mainWrapper.style.opacity = "100";
};

function buttonFunction() {
  let mainWrapper = document.getElementById("mainWrapper");
  mainWrapper.style.visibility = "hidden";
  mainWrapper.style.opacity = "0";
  setTimeout(function() {
    window.location.href = "DAevalueringsskemaMED.html";
  }, 500);
}
