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
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
            console.log('Toggle clicked!');
                nav.classList.toggle('show')
          });
    }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))