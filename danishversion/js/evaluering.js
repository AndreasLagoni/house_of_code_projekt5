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

function målbtnFunction() {
  document.getElementById("skemaInfo").style.display = "none";
  document.getElementById("skemaContent").style.display = "none";
  document.getElementById("evalueremål").style.display = "flex";
  målbtn.classList.add("active");
  spørgsmålbtn.classList.remove("active");
}
function spørgsmålBtn() {
  document.getElementById("skemaInfo").style.display = "block";
  document.getElementById("skemaContent").style.display = "block";
  document.getElementById("evalueremål").style.display = "none";
  målbtn.classList.remove("active");
  spørgsmålbtn.classList.add("active");
}
function focusInput() {
  var samtaleSpørgsmål = document.getElementsByClassName("samtaleSpørgsmål");
  for (var i = 0; i < samtaleSpørgsmål.length; i++) {
    var samtaleItems = samtaleSpørgsmål[i].closest("article > div");
    if (samtaleSpørgsmål[i] === document.activeElement) {
      samtaleItems.style = "background-color: #f6f1ee;";
      samtaleSpørgsmål[i].style = "background-color: white;";
    } else {
      samtaleItems.style = "background-color: rgb(189, 189, 189);";
      samtaleSpørgsmål[i].style = "background-color:rgb(189, 189, 189);";
    }
  }
}
function backfromGoals() {
  document.getElementById("skemaInfo").style.display = "block";
  document.getElementById("skemaContent").style.display = "block";
  document.getElementById("evalueremål").style.display = "none";
  målbtn.classList.remove("active");
  spørgsmålbtn.classList.add("active");
}
function bekræftelse() {
  window.location.href = "DAconfirmationSendMED.html";
}
