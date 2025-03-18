
// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href'); // Get the target section ID
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth' // Smooth scroll
    });
  });
});

// Newsletter Form Validation
document.querySelector('.newsletter-button').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form submission
  const emailInput = document.querySelector('.newsletter-email');
  const email = emailInput.value;

  if (validateEmail(email)) {
    alert('Thank you for subscribing!'); // Success message
    emailInput.value = ''; // Clear the input
  } else {
    alert('Please enter a valid email address.'); // Error message
  }
});

// Helper function to validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}



// Redirect Buttons
document.querySelector('.download-button').addEventListener('click', function () {
  window.location.href = 'https://apps.apple.com/us/app/eloomin/id6503729898';
});

document.querySelector('.app-store-button').addEventListener('click', function () {
  window.location.href = 'https://apps.apple.com/us/app/eloomin/id6503729898';
});

document.querySelector('.pricing-button').addEventListener('click', function () {
  window.location.href = 'https://apps.apple.com/us/app/eloomin/id6503729898';
});

document.querySelector('.cta-button').addEventListener('click', function () {
  window.location.href = 'https://apps.apple.com/us/app/eloomin/id6503729898';
});