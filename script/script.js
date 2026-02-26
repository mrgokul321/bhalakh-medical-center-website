// ----- LOAD FOOTER FROM FOOTER.HTML -----
fetch('components/footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer-area').innerHTML = data);

const YOUR_WHATSAPP_NUMBER = "919790766862";

// ----- LOAD FOOTER -----
fetch('components/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer-area').innerHTML = data;

        const footerForm = document.getElementById("footer-form");

        if (footerForm) {
            footerForm.addEventListener("submit", function (e) {
                e.preventDefault();

                const name = document.getElementById("footer-name").value.trim();
                const mobile = document.getElementById("footer-mobile").value.trim();
                const email = document.getElementById("footer-email").value.trim();
                const messageText = document.getElementById("footer-message").value.trim();

                const message =
                    `New Enquiry (Footer Form)
                    Name: ${name}
                    Mobile: ${mobile}
                    Email: ${email}
                    Message: ${messageText}`;

                const url = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

                window.open(url, "_blank");

                document.getElementById("footer-status").innerText = "Opening WhatsApp...";
            });
        }
    });

// ----- LOAD FLOATING BUTTONS FROM FLOATING-BUTTONS.HTML -----
fetch('components/floating-buttons.html')
    .then(res => res.text())
    .then(data => document.getElementById('floating-buttons-area').innerHTML = data);


// Recap scrolling function
function scrollRecap(amount) {
    const el = document.getElementById('recapScroller');
    if (!el) return;
    el.scrollBy({ left: amount, behavior: 'smooth' });
}