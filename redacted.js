function redactText() {
    const redactedElements = document.querySelectorAll('.redacted');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

    redactedElements.forEach(element => {
        const text = element.textContent; // Get the original text
        const redactedText = text.replace(/./g, () => characters[Math.floor(Math.random() * characters.length)]); // Replace each character with a random one
        element.setAttribute('data-text', text); // Store the original text in a data attribute
        element.textContent = redactedText; // Set the redacted text
    });
}

function animateRedaction() {
    redactText();
    setTimeout(animateRedaction, 300); // Change characters every 300ms
}

// Call the animateRedaction function to start the redaction effect
animateRedaction();
