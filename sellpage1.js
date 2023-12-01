function toggleDropdown() {
    // Get the dropdown content
    var dropdown = document.getElementById("myDropdown");
  
    // Toggle the display style
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  
  function selectOption(option) {
    // Set the button text to the selected option
    document.querySelector(".category-button-css").innerHTML = option;
  
    // Hide the dropdown after selecting an option
    document.getElementById("myDropdown").style.display = "none";
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.category-button-css')) {
      var dropdown = document.getElementById("myDropdown");
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    }
  }
  function previewImage(event) {
    // Get the file input
    var input = event.target;
  
    // Ensure a file was selected
    if (input.files && input.files[0]) {
      // Create a FileReader object to read the file
      var reader = new FileReader();
  
      // Set a callback function to handle the file reading
      reader.onload = function(e) {
        // Set the source of the image element to the read data URL
        document.getElementById('imagePreview').src = e.target.result;
      };
  
      // Read the file as a data URL
      reader.readAsDataURL(input.files[0]);
  
      // Show the image preview container
      document.getElementById('imagePreviewContainer').style.display = 'block';
    }
  }