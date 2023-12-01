document.addEventListener("DOMContentLoaded", function () {
    // Get all categories
    var categories = document.querySelectorAll('section');
  
    // Add event listener for button click
    document.getElementById('filterButton').addEventListener('click', function () {
      var selectedCategory = prompt('Enter a category:');
  
      // Loop through each category and hide/show based on the entered category
      categories.forEach(function (category) {
        if (selectedCategory === 'all' || category.classList.contains(selectedCategory)) {
          category.style.display = 'block';
        } else {
          category.style.display = 'none';
        }
      });
    });
  });