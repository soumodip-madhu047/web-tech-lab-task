document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset previous error messages
        clearErrors();
        
        // Validate all fields
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isPhoneNumberValid = validatePhoneNumber();
        
        // If all validations pass
        if (isFullNameValid && isEmailValid && isPasswordValid && 
            isConfirmPasswordValid && isPhoneNumberValid) {
            successMessage.style.display = 'block';
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });

    function validateFullName() {
        const fullName = document.getElementById('fullName').value.trim();
        const errorElement = document.getElementById('fullNameError');
        
        if (fullName === '') {
            errorElement.innerText = 'Full name is required';
            return false;
        }
        
        return true;
    }

    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        const errorElement = document.getElementById('emailError');
        
        if (email === '') {
            errorElement.innerText = 'Email is required';
            return false;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            errorElement.innerText = 'Email must contain @ and .';
            return false;
        }
        
        return true;
    }

    function validatePassword() {
        const password = document.getElementById('password').value;
        const errorElement = document.getElementById('passwordError');
        
        if (password === '') {
            errorElement.innerText = 'Password is required';
            return false;
        }
        
        if (password.length < 6) {
            errorElement.innerText = 'Password must be at least 6 characters';
            return false;
        }
        
        return true;
    }

    function validateConfirmPassword() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorElement = document.getElementById('confirmPasswordError');
        
        if (confirmPassword === '') {
            errorElement.innerText = 'Please confirm your password';
            return false;
        }
        
        if (password !== confirmPassword) {
            errorElement.innerText = 'Passwords do not match';
            return false;
        }
        
        return true;
    }

    function validatePhoneNumber() {
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const errorElement = document.getElementById('phoneNumberError');
        
        if (phoneNumber === '') {
            errorElement.innerText = 'Phone number is required';
            return false;
        }
        
        // Using isNaN to check if phone number contains only digits
        if (isNaN(phoneNumber)) {
            errorElement.innerText = 'Phone number must contain only digits';
            return false;
        }
        
        return true;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.innerText = '';
        });
        successMessage.style.display = 'none';
    }
});