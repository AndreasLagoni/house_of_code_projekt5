window.onload = function() {
  let mainWrapper = document.getElementById("mainWrapper");
  mainWrapper.style.visibility = "visible";
  mainWrapper.style.opacity = "100";
};

function buttonFunction() {
  let mainContent = document.getElementById("mainContent");
  mainContent.style.visibility = "hidden";
  mainContent.style.opacity = "0";
  setTimeout(function() {
    window.location.href = "ENevalueringsskemaMED.html";
  }, 500);
}
