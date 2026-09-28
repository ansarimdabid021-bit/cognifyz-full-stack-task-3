function showMessage() {
    const message = document.getElementById("message");

    message.textContent =
        "Hello! Thanks for exploring my Cognifyz Task 3 project. 🚀";

    message.style.animation = "none";

    setTimeout(() => {
        message.style.animation = "fadeUp 0.6s ease";
    }, 10);
}