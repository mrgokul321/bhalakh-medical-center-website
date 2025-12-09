// ----- LOAD FOOTER FROM FOOTER.HTML -----
fetch('components/footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer-area').innerHTML = data);

// ----- LOAD FLOATING BUTTONS FROM FLOATING-BUTTONS.HTML -----
fetch('components/floating-buttons.html')
    .then(res => res.text())
    .then(data => document.getElementById('floating-buttons-area').innerHTML = data);