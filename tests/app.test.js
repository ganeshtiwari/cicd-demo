describe('Counter Application', () => {
  beforeEach(() => {
      document.body.innerHTML = `
          <div id="counter">0</div>
          <button id="increment">+</button>
          <button id="decrement">-</button>
      `;
      
      window.counterApp = undefined;
      
      // Load the app
      require('../js/app.js');
      
      // Trigger DOMContentLoaded
      const event = document.createEvent('Event');
      event.initEvent('DOMContentLoaded', true, true);
      document.dispatchEvent(event);
  });
  
  test('Counter should start at 0', () => {
      expect(window.counterApp.getCount()).toBe(0);
      expect(document.getElementById('counter').textContent).toBe('0');
  });
  
  test('Counter should increment correctly', () => {
      window.counterApp.increment();
      expect(window.counterApp.getCount()).toBe(1);
      expect(document.getElementById('counter').textContent).toBe('1');
  });
  
  test('Counter should decrement correctly', () => {
      window.counterApp.decrement();
      expect(window.counterApp.getCount()).toBe(-1);
      expect(document.getElementById('counter').textContent).toBe('-1');
  });
});