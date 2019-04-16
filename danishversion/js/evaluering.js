window.onload = function() {
  let mainWrapper = document.getElementById("contentWrapper");
  mainWrapper.style.visibility = "visible";
  mainWrapper.style.opacity = "100";
};
var messageModal = document.getElementById("messageModal");
function openModal() {
  messageModal.classList.toggle("open");
}
