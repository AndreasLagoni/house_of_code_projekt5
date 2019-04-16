window.onload = function() {
  let mainWrapper = document.getElementById("contentWrapper");
  mainWrapper.style.visibility = "visible";
  mainWrapper.style.opacity = "100";
};
var messageModal = document.getElementById("messageModal");
function openModal() {
  messageModal.classList.toggle("open");
  document.getElementById("newMessage").style.display = "none";
}

var spørgsmålbtn = document.getElementById("spørgsmålbtn");
var målbtn = document.getElementById("målbtn");
