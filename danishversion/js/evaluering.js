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
  document.getElementById("skemaInfo").style.opacity = "0";
  document.getElementById("skemaInfo").style.visibility = "hidden";
  document.getElementById("skemaContent").style.opacity = "0";
  document.getElementById("skemaContent").style.visibility = "hidden";
  målbtn.classList.add("active");
  spørgsmålbtn.classList.remove("active");
  setTimeout(function() {
    document.getElementById("skemaContent").style.display = "none";
  }, 500);
}
function spørgsmålBtn() {
  document.getElementById("skemaInfo").style.opacity = "100";
  document.getElementById("skemaInfo").style.visibility = "visible";
  document.getElementById("skemaContent").style.opacity = "100";
  document.getElementById("skemaContent").style.visibility = "visible";
  målbtn.classList.remove("active");
  spørgsmålbtn.classList.add("active");
}
function focusInput() {
  var samtaleSpørgsmål = document.getElementsByClassName("samtaleSpørgsmål");
  for (var i = 0; i < samtaleSpørgsmål.length; i++) {
    var samtaleItems = samtaleSpørgsmål[i].closest("article > div");
    if (samtaleSpørgsmål[i] === document.activeElement) {
      samtaleItems.style = "background-color: #f6f1ee;";
    } else {
      samtaleItems.style = "background-color: gray;";
    }
  }
}
