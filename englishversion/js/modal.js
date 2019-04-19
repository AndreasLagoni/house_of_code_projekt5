var messageModal = document.getElementById("messageModal");
var accountModal = document.getElementById("accountModal");
function openModal() {
  if ((accountModal.classList.contains = "open")) {
    accountModal.classList.remove("open");
    messageModal.classList.toggle("open");
  } else {
    messageModal.classList.toggle("open");
  }
  document.getElementById("newMessage").style.display = "none";
}
function openAccountModal() {
  if ((messageModal.classList.contains = "open")) {
    messageModal.classList.remove("open");
    accountModal.classList.toggle("open");
  } else {
    accountModal.classList.toggle("open");
  }
}
