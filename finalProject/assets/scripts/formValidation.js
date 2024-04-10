document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        //overriding the normal behaviour
        event.preventDefault();
        debugger
        // fetching the values from the html page using DOM 
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        //trimming values in case if there exists any trailing or leading whitespaces
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        //check if the values are not null 
        if (nameValue === '' || emailValue === '' || messageValue === '') {
            alert('Please fill in all fields.');
            return;
        }
        // checking if the entered text is a proper email or not
        if (!isValidEmail(emailValue)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        document.getElementById('message-box').classList.remove('hidden');
        document.getElementById('message-box').classList.add('visible');
        // form validation and can be sumitted succesfully
        alert('Form submitted successfully!');
        // Reset form inputs
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });

    document.getElementById('close-button').addEventListener('click', function() {
        document.getElementById('message-box').classList.add('hidden');
        document.getElementById('message-box').classList.remove('visible');
    });

    function isValidEmail(email) {
        // Very basic email validation using regular expression to check the format of the email 
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
