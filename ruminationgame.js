function createAsciiCow() {
    const cow = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
    `;
    return cow;
}

createAsciiCow()

// Get the pre element
const asciiCowElement = document.getElementById('ascii-cow');

// Set the content of the pre element to the ASCII cow
asciiCowElement.textContent = createAsciiCow();