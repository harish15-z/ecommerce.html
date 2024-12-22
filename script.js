// JavaScript for E-Commerce Website

document.addEventListener("DOMContentLoaded", () => {
    const cart = [];

    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll(".product .btn");
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.querySelector("p").textContent;

            cart.push({
                name: productName,
                price: productPrice,
            });

            updateCart();
            alert(`${productName} has been added to your cart.`);
        });
    });

    // Update Cart Functionality
    const updateCart = () => {
        const cartIcon = document.querySelector(".cart-icon");
        cartIcon.innerHTML = `<img src="cart.png" alt="Cart"> <span>${cart.length}</span>`;
    };

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log("Form Submitted:", { name, email, message });

        alert("Thank you for your message. We'll get back to you soon!");
        contactForm.reset();
    });
});
