function animateButton1() {
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
  
    // Add the 'animate' class to Button 1
    button1.classList.add('animate');
  
    // Set timeout to remove the 'animate' class after 10 seconds
    setTimeout(function() {
      button1.classList.remove('animate');
  
      // Trigger a click on Button 2 after the delay
      simulateClick(button2);
    }, 3000);
  }
  
  function simulateClick(element) {
    var event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }
  function animateButton2() {
    var button2 = document.getElementById('button2');
    button2.classList.add('animate');
  }