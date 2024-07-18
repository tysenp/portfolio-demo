document.addEventListener("DOMContentLoaded", function () {

  const helloElement = document.querySelector('.main');

  helloElement.animate(
    [
      { opacity: 0 },
      { opacity: 1 }
    ],
    {
      duration: 750,
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
      duration: 750,
      easing: 'ease-out',
      fill: 'forwards'
    }
  );
});

document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.querySelector('.nav-container input.checkbox');
  const form = document.querySelector('.main');

  checkbox.addEventListener('change', function () {
      form.style.display = this.checked ? 'none' : 'block';
  });
});
