const colorButton = document.getElementById('button');

// Ensure the button has an initial background color
colorButton.style.backgroundColor = '#4CAF50';

colorButton.addEventListener('click', () => { 
  colorButton.style.backgroundColor = colorButton.style.backgroundColor === 'rgb(76, 175, 80)' ? 'red' : 'rgb(76, 175, 80)';
});
