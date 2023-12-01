document.addEventListener("DOMContentLoaded", function () {
    var articles = document.querySelectorAll('article');
  
    document.getElementById('sportsButton').addEventListener('click', function () {
      filterProducts('sports');
    });
  
    document.getElementById('fashionButton').addEventListener('click', function () {
      filterProducts('fashion');
    });
  
    function filterProducts(category) {
      articles.forEach(function (article) {
        var articleClasses = article.classList;
        if (category === 'all' || articleClasses.contains(category)) {
          article.style.display = 'block';
        } else {
          article.style.display = 'none';
        }
      });
    }
  });
  