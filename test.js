// Get the checkbox
let checkbox01 = document.getElementById("checkbox01");
checkbox01.addEventListener("click", function() {
  if (checkbox01.checked == true) {
    document.getElementById("checkboxWrapper01").style.height = "80px";
    document.getElementById("checkboxInfo01").style.display = "block";
  } else {
    document.getElementById("checkboxWrapper01").style.height = "50px";
    document.getElementById("checkboxInfo01").style.display = "none";
  }
});
let checkbox02 = document.getElementById("checkbox02");
checkbox02.addEventListener("click", function() {
  if (checkbox02.checked == true) {
    document.getElementById("checkboxWrapper02").style.height = "80px";
    document.getElementById("checkboxInfo02").style.display = "block";
  } else {
    document.getElementById("checkboxWrapper02").style.height = "50px";
    document.getElementById("checkboxInfo02").style.display = "none";
  }
});
// Get the container element
var btnContainer = document.getElementById("topformButtons");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// Ser på om knap 1 er active fra starten af -> Hvis den er -> Hvis hvad der ligger i den.
window.onload = function() {
  let knap1 = document.getElementById("knap1");
  if (knap1.classList.contains("active") == true) {
    document.getElementById("knap1info").style.display = "block";
  } else {
    document.getElementById("knap1info").style.display = "none";
  }
};

knap1.addEventListener("click", function() {
  if (knap1.classList.contains("active") == true) {
    document.getElementById("knap1info").style.display = "block";
    document.getElementById("knap2info").style.display = "none";
  } else {
    document.getElementById("knap1info").style.display = "none";
    document.getElementById("knap2info").style.display = "block";
  }
});
let knap2 = document.getElementById("knap2");
knap2.addEventListener("click", function() {
  if (knap2.classList.contains("active") == true) {
    document.getElementById("knap2info").style.display = "block";
    document.getElementById("knap1info").style.display = "none";
  } else {
    document.getElementById("knap2info").style.display = "none";
    document.getElementById("knap1info").style.display = "block";
  }
});
