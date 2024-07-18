document.addEventListener("DOMContentLoaded", function () {

  const helloElement = document.querySelector('.hello');

  helloElement.animate(
    [
      { opacity: 0 },
      { opacity: 1 }
    ],
    {
      duration: 1000,
      easing: 'ease-out',
      fill: 'forwards'
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {

  const helloElement = document.querySelector('.navbar');


  helloElement.animate(
    [
      { opacity: 0 },
      { opacity: 1 }
    ],
    {
      duration: 1000,
      easing: 'ease-out',
      fill: 'forwards'
    }
  );
});

document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.querySelector('.nav-container input.checkbox');
  const form = document.querySelector('.hello');

  checkbox.addEventListener('change', function () {
      form.style.display = this.checked ? 'none' : 'block';
  });
});
