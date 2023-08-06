function toggleSelection(boxNumber) {
    var allSelectionDivs = document.querySelectorAll(".selection");
    var allBoxDivs = document.querySelectorAll(".box");
    var allRadioButtons = document.querySelectorAll(".radio-input input[type='radio']");
  
    for (var i = 0; i < allSelectionDivs.length; i++) {
      if (i + 1 === boxNumber) {
        allSelectionDivs[i].style.display = "block";
        allBoxDivs[i].style.border = "2px solid #007f61";
        allBoxDivs[i].style.backgroundColor = "#F4FBF9";
        allRadioButtons[i].checked = true;
      } else {
        allSelectionDivs[i].style.display = "none";
        allBoxDivs[i].style.border = "0.904px solid #c8c8c8";
        allBoxDivs[i].style.backgroundColor = "transparent";
        allRadioButtons[i].checked = false;
      }
    }
  }
  
