var messageModal = document.getElementById("messageModal");
function openModal() {
  if (messageModal.classList.contains("open")) {
    messageModal.classList.remove("open");
  } else {
    messageModal.classList.add("open");
  }
}
