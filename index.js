const $classColor = document.querySelector('#classColor');
const $selectedColor = document.querySelector('#selectedColor');

$classColor.addEventListener('input', (event) => {
  $selectedColor.style.backgroundColor = event.target.value;
})

