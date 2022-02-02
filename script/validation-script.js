const form = document.getElementById('form');
const email = document.getElementById('email');
const warning = document.getElementById('warning');

function validation() {
  if (email.value === email.value.toLowerCase()) {
    return true;
  }
}

form.addEventListener('submit', (event) => {
  if (!validation()) {
    warning.innerHTML = 'only lowecase characters allowed !';
    event.preventDefault();
  }
});
