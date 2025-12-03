document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeToggle = document.getElementById('theme-toggle');
    const greetingElement = document.getElementById('greeting');
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    let isDarkMode = false;
    
    themeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });

    document.body.classList.add('light-mode');

    function updateGreeting() {
        const hour = new Date().getHours();
        let greeting;
        
        if (hour < 12) {
            greeting = "Good Morning!";
        } else if (hour < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }
        
        greetingElement.textContent = greeting;
    }

    updateGreeting();

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');

            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${sectionId}-section`) {
                    section.classList.add('active');
                }
            });
        });
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
 
        clearErrors();
        formMessage.textContent = '';

        let isValid = true;

        if (name === '') {
            document.getElementById('name-error').textContent = 'Name is required';
            isValid = false;
        }
        if (email === '') {
            document.getElementById('email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address';
            isValid = false;
        }

        if (message === '') {
            document.getElementById('message-error').textContent = 'Message is required';
            isValid = false;
        } else if (message.length < 10) {
            document.getElementById('message-error').textContent = 'Message must be at least 10 characters';
            isValid = false;
        }

        if (isValid) {
            formMessage.textContent = 'Thank you! Your message has been sent.';
            formMessage.style.color = '#27ae60';
            contactForm.reset();

            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        }
    });

    function isValidEmail(email) {
        return email.includes('@') && email.includes('.');
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
});