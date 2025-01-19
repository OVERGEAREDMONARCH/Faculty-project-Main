// script.js

// Display current year in footer
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
if (yearSpan) {
  yearSpan.textContent = currentYear;
}

// Contact form validation & submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Basic email format check (very simple)
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // If all checks pass
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
  });
}
