document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous errors
        clearErrors();
        
        // Validate inputs
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isPhoneValid = validatePhone();
        
        // If all validations pass
        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isPhoneValid) {
            // Form is valid - you can submit to server here
            alert('Registration successful!');
            form.reset();
        }
    });
    
    // Individual validation functions
    function validateName() {
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        const nameValue = nameInput.value.trim();
        
        if (nameValue === '') {
            showError(nameInput, nameError, 'Name is required');
            return false;
        } else if (!/^[a-zA-Z\s]{2,}$/.test(nameValue)) {
            showError(nameInput, nameError, 'Name must be at least 2 characters and contain only letters');
            return false;
        } else {
            showSuccess(nameInput);
            return true;
        }
    }
    
    function validateEmail() {
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue === '') {
            showError(emailInput, emailError, 'Email is required');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, emailError, 'Please enter a valid email');
            return false;
        } else {
            showSuccess(emailInput);
            return true;
        }
    }
    
    function validatePassword() {
        const passwordInput = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        const passwordValue = passwordInput.value.trim();
        
        if (passwordValue === '') {
            showError(passwordInput, passwordError, 'Password is required');
            return false;
        } else if (passwordValue.length < 8) {
            showError(passwordInput, passwordError, 'Password must be at least 8 characters');
            return false;
        } else {
            showSuccess(passwordInput);
            return true;
        }
    }
    
    function validateConfirmPassword() {
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        
        if (confirmPasswordValue === '') {
            showError(confirmPasswordInput, confirmPasswordError, 'Please confirm your password');
            return false;
        } else if (confirmPasswordValue !== passwordInput.value.trim()) {
            showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
            return false;
        } else {
            showSuccess(confirmPasswordInput);
            return true;
        }
    }
    
    function validatePhone() {
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phoneValue = phoneInput.value.trim();
        const phoneRegex = /^[0-9]{10,15}$/;
        
        if (phoneValue === '') {
            showError(phoneInput, phoneError, 'Phone number is required');
            return false;
        } else if (!phoneRegex.test(phoneValue)) {
            showError(phoneInput, phoneError, 'Please enter a valid phone number (10-15 digits)');
            return false;
        } else {
            showSuccess(phoneInput);
            return true;
        }
    }
    
    // Helper functions
    function showError(input, errorElement, message) {
        input.classList.add('error');
        input.classList.remove('success');
        errorElement.textContent = message;
    }
    
    function showSuccess(input) {
        input.classList.remove('error');
        input.classList.add('success');
    }
    
    function clearErrors() {
        const inputs = form.querySelectorAll('input');
        const errorMessages = form.querySelectorAll('.error-message');
        
        inputs.forEach(input => {
            input.classList.remove('error', 'success');
        });
        
        errorMessages.forEach(error => {
            error.textContent = '';
        });
    }
    
    // Real-time validation for better UX
    document.getElementById('name').addEventListener('blur', validateName);
    document.getElementById('email').addEventListener('blur', validateEmail);
    document.getElementById('password').addEventListener('blur', validatePassword);
    document.getElementById('confirmPassword').addEventListener('blur', validateConfirmPassword);
    document.getElementById('phone').addEventListener('blur', validatePhone);
});