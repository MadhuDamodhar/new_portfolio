// Function to send the email

function sendEmail() {
    emailjs.init("GZMwJaV9Gliwt4JNR");

    const form = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    // Handle the form submission
    async function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            // Send the form data using EmailJS
            const result = await emailjs.sendForm(
                "service_0porjrq",
                "template_dofsbbl",
                form
            );
            statusMessage.textContent = "Email Sent Successfully!";
            console.log(result.text);
            form.reset(); // Reset the form fields
        } catch (error) {
            statusMessage.textContent = "Something went wrong!";
            console.error(error.text);
        }
    }

    // Trigger the form submission when the form is submitted
    form.addEventListener('submit', handleSubmit);
}

// Initialize the sendEmail function
sendEmail();

