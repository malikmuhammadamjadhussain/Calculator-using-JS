function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.substring(0, display.value.length - 1);
  }
  
  function calculate() {
    var display = document.getElementById('display');
    display.value = eval(display.value);
  }
  