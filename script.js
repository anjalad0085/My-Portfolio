document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('6NSAoL4acZ7_THARm'); // Replace 'YOUR_PUBLIC_KEY' with your actual public key

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Prepare email data
        var templateParams = {
            name: name,
            email: email,
            message: message
        };

        // Send email
        emailjs.send('service_0g0ijjq', 'template_akq5wf8', templateParams)
            .then(function(response) {
                alert('Your message has been sent successfully!', response.status, response.text);
            }, function(error) {
                alert('Failed to send the message, please try again later.', error);
            });
    });
});