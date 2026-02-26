const YOUR_WHATSAPP_NUMBER = "919790766862"; // change this

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;

    const patientName = form.patientName.value.trim();
    const mobile = form.mobile.value.trim();
    const email = form.email.value.trim();
    const doctor = form.doctor.value;
    const date = form.date.value;
    const time = form.time.value;
    const notes = form.notes.value.trim();

    const message =
        `New Appointment Request
        Patient Name: ${patientName}
        Mobile Number: ${mobile}
        Email Address: ${email || "-"}
        Doctor: ${doctor}
        Appointment Date: ${date}
        Preferred Time: ${time}
        Problem / Notes: ${notes || "-"}`;

    const url = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    // optional reset
    // form.reset();
});
