function allbutton() {
  var button1 = document.getElementById('all');
  var button2 = document.getElementById('electronics-id');

  // Add the 'animate' class to Button 1
  button1.classList.add('animate');

  // Set timeout to remove the 'animate' class after 10 seconds
  setTimeout(function() {
    button1.classList.remove('animate');

    // Trigger a click on Button 2 after the delay
    simulateClick(button2);
  }, 3000);
  document.getElementById("electronics1").style.display = "block";
  document.getElementById("electronics2").style.display = "none";
  document.getElementById("electronics3").style.display = "none";
  document.getElementById("electronics4").style.display = "none";
  document.getElementById('books1').style.display = "grid";
  document.getElementById("books2").style.display = "none";
  document.getElementById("books3").style.display = "none";
  document.getElementById("books4").style.display = "none";
  document.getElementById("others1").style.display = "grid";
  document.getElementById("accessories1").style.display = "grid";
  document.getElementById("fashion1").style.display = "none";
  document.getElementById("fashion2").style.display = "none";
  document.getElementById("fashion3").style.display = "none";
  document.getElementById("fashion4").style.display = "none";
  document.getElementById("sports1").style.display = "none";
  document.getElementById("sports2").style.display = "none";
  document.getElementById("sports3").style.display = "none";
  document.getElementById("sports4").style.display = "none";
  document.getElementById("stationary1").style.display = "none";
  document.getElementById("stationary2").style.display = "none";
  document.getElementById("stationary3").style.display = "none";
  document.getElementById("stationary4").style.display = "none";
}
document.getElementById("electronics2").style.display = "none";
document.getElementById("electronics3").style.display = "none";
document.getElementById("electronics4").style.display = "none";
document.getElementById("books2").style.display = "none";
document.getElementById("books3").style.display = "none";
document.getElementById("books4").style.display = "none";
document.getElementById("fashion1").style.display = "none";
document.getElementById("fashion2").style.display = "none";
document.getElementById("fashion3").style.display = "none";
document.getElementById("fashion4").style.display = "none";
document.getElementById("sports1").style.display = "none";
document.getElementById("sports2").style.display = "none";
document.getElementById("sports3").style.display = "none";
document.getElementById("sports4").style.display = "none";
document.getElementById("stationary1").style.display = "none";
document.getElementById("stationary2").style.display = "none";
document.getElementById("stationary3").style.display = "none";
document.getElementById("stationary4").style.display = "none";
function simulateClick(element) {
  var event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  element.dispatchEvent(event);
}
function electronicsbutton() {
  var button2 = document.getElementById('electronics-id');
  var button3 = document.getElementById('books-id');
  button2.classList.add('animate');
  setTimeout(function() {
    button2.classList.remove('animate');

    // Trigger a click on Button 3 after the delay
    simulateClick(button3);
  }, 3000);
  //document.getElementsByName("books").classList.toggle('hidden')
  document.getElementById("books1").style.display = "none";
  document.getElementById("others1").style.display = "none";
  document.getElementById("books2").style.display = "none";
  document.getElementById("accessories1").style.display = "none";
  document.getElementById("books3").style.display = "none";
  document.getElementById("electronics2").style.display = "block";
  document.getElementById("electronics3").style.display = "block";
  document.getElementById("electronics4").style.display = "block";
  document.getElementById("electronics1").style.display = "block";
  document.getElementById("books4").style.display = "none";
  document.getElementById("fashion1").style.display = "none";
  document.getElementById("fashion2").style.display = "none";
  document.getElementById("fashion3").style.display = "none";
  document.getElementById("fashion4").style.display = "none";
  document.getElementById("sports1").style.display = "none";
  document.getElementById("sports2").style.display = "none";
  document.getElementById("sports3").style.display = "none";
  document.getElementById("sports4").style.display = "none";
  document.getElementById("stationary1").style.display = "none";
  document.getElementById("stationary2").style.display = "none";
  document.getElementById("stationary3").style.display = "none";
  document.getElementById("stationary4").style.display = "none";
}
function booksfunction()
{
  var button3 = document.getElementById('books-id');
  var button4 = document.getElementById('fashion-id');
  button3.classList.add('animate');
  setTimeout(function() {
    button3.classList.remove('animate');

    // Trigger a click on Button 4 after the delay
    simulateClick(button4);
  }, 3000);

  document.getElementById('books1').style.display = "block";
  document.getElementById("others1").style.display = "none";
  document.getElementById("electronics2").style.display = "none";
  document.getElementById("electronics3").style.display = "none";
  document.getElementById("electronics4").style.display = "none";
  document.getElementById("accessories1").style.display = "none";
  document.getElementById("electronics1").style.display = "none";
  document.getElementById("fashion1").style.display = "none";
  document.getElementById("fashion2").style.display = "none";
  document.getElementById("fashion3").style.display = "none";
  document.getElementById("fashion4").style.display = "none";
  document.getElementById("sports1").style.display = "none";
  document.getElementById("sports2").style.display = "none";
  document.getElementById("sports3").style.display = "none";
  document.getElementById("sports4").style.display = "none";
  document.getElementById("stationary1").style.display = "none";
  document.getElementById("stationary2").style.display = "none";
  document.getElementById("stationary3").style.display = "none";
  document.getElementById("stationary4").style.display = "none";
  document.getElementById("books2").style.display = "block";
  document.getElementById("books3").style.display = "block";
  document.getElementById("books4").style.display = "block";
}
function fashionfunction()
{
  var button4 = document.getElementById('fashion-id');
  var button5 = document.getElementById('sports-id');
  button4.classList.add('animate');
  setTimeout(function() {
    button4.classList.remove('animate');

    // Trigger a click on Button 5 after the delay
    simulateClick(button5);
  }, 3000);
  document.getElementById('books1').style.display = "none";
  document.getElementById("others1").style.display = "none";
  document.getElementById("electronics2").style.display = "none";
  document.getElementById("electronics3").style.display = "none";
  document.getElementById("electronics4").style.display = "none";
  document.getElementById("accessories1").style.display = "none";
  document.getElementById("electronics1").style.display = "none";
  document.getElementById("books2").style.display = "none";
  document.getElementById("books3").style.display = "none";
  document.getElementById("books4").style.display = "none";
  document.getElementById("sports1").style.display = "none";
  document.getElementById("sports2").style.display = "none";
  document.getElementById("sports3").style.display = "none";
  document.getElementById("sports4").style.display = "none";
  document.getElementById("stationary1").style.display = "none";
  document.getElementById("stationary2").style.display = "none";
  document.getElementById("stationary3").style.display = "none";
  document.getElementById("stationary4").style.display = "none";
  document.getElementById("fashion1").style.display = "block";
  document.getElementById("fashion2").style.display = "block";
  document.getElementById("fashion3").style.display = "block";
  document.getElementById("fashion4").style.display = "block";
}
function sportsfunction()
{
  var button5 = document.getElementById('sports-id');
  var button6 = document.getElementById('stationary-id');
  button5.classList.add('animate');
  setTimeout(function() {
    button5.classList.remove('animate');

    // Trigger a click on Button 5 after the delay
    simulateClick(button6);
  }, 3000);
  document.getElementById('books1').style.display = "none";
  document.getElementById("others1").style.display = "none";
  document.getElementById("electronics2").style.display = "none";
  document.getElementById("electronics3").style.display = "none";
  document.getElementById("electronics4").style.display = "none";
  document.getElementById("accessories1").style.display = "none";
  document.getElementById("electronics1").style.display = "none";
  document.getElementById("books2").style.display = "none";
  document.getElementById("books3").style.display = "none";
  document.getElementById("books4").style.display = "none";
  document.getElementById("fashion1").style.display = "none";
  document.getElementById("fashion2").style.display = "none";
  document.getElementById("fashion3").style.display = "none";
  document.getElementById("fashion4").style.display = "none";
  document.getElementById("stationary1").style.display = "none";
  document.getElementById("stationary2").style.display = "none";
  document.getElementById("stationary3").style.display = "none";
  document.getElementById("stationary4").style.display = "none";
  document.getElementById("sports1").style.display = "block";
  document.getElementById("sports2").style.display = "block";
  document.getElementById("sports3").style.display = "block";
  document.getElementById("sports4").style.display = "block";
}
function stationaryfunction()
{
  var button6 = document.getElementById('stationary-id');
  button6.classList.add('animate');
  document.getElementById('books1').style.display = "none";
  document.getElementById("others1").style.display = "none";
  document.getElementById("electronics2").style.display = "none";
  document.getElementById("electronics3").style.display = "none";
  document.getElementById("electronics4").style.display = "none";
  document.getElementById("accessories1").style.display = "none";
  document.getElementById("electronics1").style.display = "none";
  document.getElementById("books2").style.display = "none";
  document.getElementById("books3").style.display = "none";
  document.getElementById("books4").style.display = "none";
  document.getElementById("fashion1").style.display = "none";
  document.getElementById("fashion2").style.display = "none";
  document.getElementById("fashion3").style.display = "none";
  document.getElementById("fashion4").style.display = "none";
  document.getElementById("sports1").style.display = "none";
  document.getElementById("sports2").style.display = "none";
  document.getElementById("sports3").style.display = "none";
  document.getElementById("sports4").style.display = "none";
 document.getElementById("stationary1").style.display = "block";
  document.getElementById("stationary2").style.display = "block";
  document.getElementById("stationary3").style.display = "block";
  document.getElementById("stationary4").style.display = "block";
}