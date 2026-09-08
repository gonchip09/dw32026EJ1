const form = document.querySelector('.contact-form');
const email = document.querySelector('#email');
const emailStatus = document.querySelector('#email-status');
const formStatus = document.querySelector('#form-status');

function validateEmail() {
    if (email.value === '') {
        email.setCustomValidity('Escribe tu email.');
        emailStatus.textContent = '';
        emailStatus.className = 'field-status';
        return false;
    }

    if (email.validity.typeMismatch) {
        email.setCustomValidity('Escribe un email válido.');
        emailStatus.textContent = 'Revisa el formato del email.';
        emailStatus.className = 'field-status is-invalid';
        return false;
    }

    email.setCustomValidity('');
    emailStatus.textContent = 'Email válido.';
    emailStatus.className = 'field-status is-valid';
    return true;
}

email.addEventListener('input', validateEmail);

form.addEventListener('submit', (event) => {
    if (!validateEmail() || !form.checkValidity()) {
        event.preventDefault();
        formStatus.textContent = 'Completa los campos marcados antes de enviar.';
        form.reportValidity();
        return;
    }

});
