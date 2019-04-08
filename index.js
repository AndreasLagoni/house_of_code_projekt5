function redirectAnsat() {
  let modal = document.getElementById("redirectAnsat");
  modal.classList.add("redirect");
  setTimeout(function() {
    window.location.replace("danishversion/frontpage.html");
  }, 3000);
}
function redirectLeder() {
  let modal = document.getElementById("redirectLeder");
  modal.classList.add("redirect");
  setTimeout(function() {
    window.location.replace("#");
    window.location.reload();
  }, 3000);
}
