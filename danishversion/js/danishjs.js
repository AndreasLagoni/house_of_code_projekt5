var messageModal = document.getElementById("messageModal");
function openModal() {
  messageModal.classList.toggle("open");
  document.getElementById("newMessage").style.display = "none";
}

var evaluereLink = document.getElementById("green");
evaluereLink.onclick = function() {
  let mainWrapper = document.getElementById("mainWrapper");
  let bg = document.getElementById("bgimg");
  bg.style.opacity = "0";
  mainWrapper.style.opacity = "0";
  mainWrapper.style.visibility = "hidden";
  setTimeout(function() {
    window.location.href = "evaluere/DAevaluerMED.html";
  }, 500);
};
