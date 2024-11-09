// script.js

// Toggle between login and register forms
function toggleForms() {
    document.getElementById('loginForm').classList.toggle('active');
    document.getElementById('registerForm').classList.toggle('active');
    clearErrors();
  }
  
  // Clear error messages
  function clearErrors() {
    document.getElementById('loginError').textContent = '';
    document.getElementById('registerError').textContent = '';
  }
  
  // Handle login form submission
  function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    if (email === '' || password === '') {
      document.getElementById('loginError').textContent = 'Please enter both email and password';
    } else {
      console.log('Login successful:', { email, password });
      document.getElementById('loginError').textContent = '';
    }
  }
  
  // Handle registration form submission
  function handleRegister(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (email === '' || password === '' || confirmPassword === '') {
      document.getElementById('registerError').textContent = 'Please fill in all fields';
    } else if (password !== confirmPassword) {
      document.getElementById('registerError').textContent = 'Passwords do not match';
    } else {
      console.log('Registration successful:', { email, password });
      document.getElementById('registerError').textContent = '';
    }
  }
  