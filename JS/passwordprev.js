//code to toggle  password visibility
const togglePassword = document.getElementById('toggle-password');
const password = document.getElementById('password-login');

// Add click event listener to the toggle icon
togglePassword.addEventListener('click', () => {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // Toggle the eye / eye-slash icon
    togglePassword.classList.toggle('ri-eye-off-fill');
});