document.addEventListener("DOMContentLoaded", function () {
    // Get all products
    var products = document.querySelectorAll('.product');
  
    // Add event listener for category selection
    document.getElementById('categoryFilter').addEventListener('change', function () {
      var selectedCategory = this.value;
  
      // Loop through each product and hide/show based on the selected category
      products.forEach(function (product) {
        var category = product.dataset.category;
  
        if (selectedCategory === 'all' || category === selectedCategory) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });
  