const CONTACT_EMAIL = 'alexdevsupport10@gmail.com';

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();
  if (!name || !message) return;

  const mailSubject = subject;
  const mailBody = `From: ${email}\n\n${message}\n\n— ${name}`;
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  const button = e.target.querySelector('button[type="submit"]');
  const original = button.textContent;
  button.textContent = 'Opening Gmail...';
  button.disabled = true;

  window.open(gmailComposeLink, '_blank');

  setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
    e.target.reset();
  }, 2500);
});
