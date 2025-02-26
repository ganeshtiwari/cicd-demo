document.addEventListener('DOMContentLoaded', function() {
  const counterElement = document.getElementById('counter');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  
  let count = 0;
  
  function updateCounter() {
      counterElement.textContent = count;
  }
  
  function increment() {
      count++;
      updateCounter();
      return count;
  }
  
  function decrement() {
      count--;
      updateCounter();
      return count;
  }
  
  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);
  
  window.counterApp = {
      increment,
      decrement,
      getCount: () => count
  };
});