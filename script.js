// Form validation - enable/disable login button
    function validateForm() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const loginBtn = document.getElementById('loginBtn');

      if (username.trim() && password.trim()) {
        loginBtn.disabled = false;
      } else {
        loginBtn.disabled = true;
      }
    }

    // Add event listeners for form validation
    document.getElementById('username').addEventListener('input', validateForm);
    document.getElementById('password').addEventListener('input', validateForm);

    // Toggle password visibility
    document.getElementById('togglePassword').addEventListener('click', function () {
      const passwordInput = document.getElementById('password');
      const toggleBtn = this;

      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = 'Hide';
      } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = 'Show';
      }
    });

    // Form submission (demo only)
    document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value;

      if (username && document.getElementById('password').value) {
        alert('This is a demo of Instagram\'s login form.\n\nUsername: ' + username + '\n\nNo actual login occurs - this is for educational purposes only.');
      }
    });

    // Facebook login demo
    document.querySelector('.fb-login').addEventListener('click', function (e) {
      e.preventDefault();
      alert('Facebook login.\n\nThis is a demo - no actual Facebook integration.');
    });

    // Forgot password demo
    document.querySelector('a[href="#"]:last-of-type').addEventListener('click', function (e) {
      e.preventDefault();
      alert('Forgot password.\n\nThis is a demo - no actual password reset functionality.');
    });