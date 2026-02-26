const YOUR_WHATSAPP_NUMBER = "919790766862";

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const mobile = form.mobile.value.trim();
    const email = form.email.value.trim();
    const messageText = form.message.value.trim();

    const message =
        `New Contact Message
Name: ${name}
Mobile: ${mobile}
Email: ${email || "-"}
Message: ${messageText}`;

    const url = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    // Optional: reset form
    // form.reset();
});
