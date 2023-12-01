document.getElementById("dropdown-btn").addEventListener("click", function() {
    var dropdownContent = document.getElementById("dropdown-content");
    if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  });