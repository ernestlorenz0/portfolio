// Load HTML components
const components = [
  'header',
  'hero',
  'about',
  'projects',
  'skills',
  'certificates',
  'contact',
  'footer'
];

components.forEach(component => {
  fetch(`${component}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById(component).innerHTML = html;
      console.log(`Successfully loaded ${component}`);
    })
    .catch(error => {
      console.error(`Error loading ${component}:`, error);
    });
});

// Wait for all components to load before setting up mobile menu
window.addEventListener('load', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        menuToggle.classList.remove('active');
      }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        if (target) {
          mobileMenu.classList.add('hidden');
          menuToggle.classList.remove('active');
          // Scroll to section after a small delay
          setTimeout(() => {
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      });
    });

    // Add smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Contact form submission
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        user_name: form.elements.user_name.value,
        user_email: form.elements.user_email.value,
        subject: form.elements.subject.value,
        message: form.elements.message.value
      };

      // Send email using EmailJS
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
          statusDiv.textContent = 'Message sent successfully!';
          statusDiv.classList.remove('text-red-400');
          statusDiv.classList.add('text-green-400');
          statusDiv.classList.remove('hidden');
          form.reset();
        }, function(error) {
          statusDiv.textContent = 'Error sending message. Please try again.';
          statusDiv.classList.remove('hidden');
        });
    });

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
          // Close mobile menu after clicking a link
          mobileMenu.classList.add('hidden');
          menuToggle.classList.remove('active');
        }
      });
    });
  }
});

// Contact form submission (placeholder)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
  });
}
