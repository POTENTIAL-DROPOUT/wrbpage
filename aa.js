let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

incrementBtn.addEventListener('click', () => {
  count++;
  updateCount();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateCount();
});

function updateCount() {
  countDisplay.textContent = count;
}