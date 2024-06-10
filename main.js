document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submit-button');
    const errorMessage = document.querySelector('.error');
    const mainSection = document.querySelector('.main-section');
    const thankYouState = document.querySelector('.thank-you-state');
    const contact = document.querySelector('.contact-email');
    const dismissButton = document.getElementById('dismiss-button');

    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      const emailValue = emailInput.value;

      if (!validateEmail(emailValue)) {
        emailInput.classList.add('error-input');
        errorMessage.style.display = 'block';
      } else {
        emailInput.classList.remove('error-input');
        errorMessage.style.display = 'none';
        mainSection.style.display = 'none';
        thankYouState.style.display = 'block';
	contact.textContent = emailValue;
      }
    });

    dismissButton.addEventListener('click', function(event) {
	thankYouState.style.display = 'none';
	mainSection.style.display = 'grid';
	emailInput.value = "";
    })

    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(String(email).toLowerCase());
    }
  });
