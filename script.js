// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//   }

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typewriter-text");
    const nameElement = document.getElementById("name-text");
    const fullText = "Hello, I'm Karthvik Sarvade";
    let index = 0;

    function typeWriter() {
        if (index < fullText.length) {
            textElement.innerHTML += fullText.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            // Remove cursor effect once the full text is typed
            textElement.style.borderRight = "none";
        }
    }

    // Start animation after page load
    setTimeout(typeWriter, 500);
});