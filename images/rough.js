function sendEmail() {
    emailjs.init("GZMwJaV9Gliwt4JNR");

    const form = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    // Handle the form submission
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const result = await emailjs.sendForm(
                "service_0porjrq",
                "template_dofsbbl",
                form
            );
            statusMessage.textContent = "Email Sent Successfully! Thank you ...";
            console.log(result.text);
            form.reset();
        } catch (error) {
            statusMessage.textContent = "Something went wrong!";
            console.error(error.text);
        }
    }

    // Trigger the form submission
    handleSubmit(new Event('submit'));
}