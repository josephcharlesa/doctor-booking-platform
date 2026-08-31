const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelectorAll('[data-scroll]').forEach((button) => {
  button.addEventListener('click', () => document.getElementById(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' }));
});

document.querySelectorAll('.slot').forEach((slot) => {
  slot.addEventListener('click', () => {
    document.querySelectorAll('.slot').forEach((item) => item.classList.remove('slot-active'));
    slot.classList.add('slot-active');
    showToast(`${slot.textContent.trim()} selected`);
  });
});

document.querySelectorAll('[data-action]').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const messages = {
      login: 'Login portal will be connected in the next build.',
      signup: 'Account registration will be connected in the next build.',
      doctor: 'Doctor onboarding will be connected in the next build.',
      browse: 'Doctor search will be connected to the live database in the next build.',
      book: 'Booking flow selected — authentication and payment are next.'
    };
    showToast(messages[action] || 'This feature is coming next.');
  });
});
