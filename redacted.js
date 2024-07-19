function redactText() {
  const redactedElements = document.querySelectorAll('.redacted');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  redactedElements.forEach(element => {
    const text = element.textContent;
    const redactedText = text.replace(/./g, () => characters[Math.floor(Math.random() * characters.length)]);
    element.setAttribute('data-text', text);
    element.textContent = redactedText;
  });
}

function animateRedaction() {
  redactText();
  setTimeout(animateRedaction, 30);

animateRedaction();
