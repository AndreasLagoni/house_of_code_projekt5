function checkboxClick() {
  let checkboxAll = document.querySelectorAll("input[type='checkbox']");
  let checkboxChecked = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  let spanCount = document.getElementById("checkboxCount");
  spanCount.innerHTML = checkboxChecked.length;
  if (checkboxChecked.length > 2) {
    for (var i = 0; i < checkboxAll.length; i++) {
      checkboxAll[i].checked = false;
      spanCount.innerHTML = 0;
    }
  }
}