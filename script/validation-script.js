const form = document.getElementById('form');
const email = document.getElementById('email');
const warning = document.getElementById('warning');
const submit = document.getElementById('submit-btn');

function validation() {

  if (email.value === email.value.toLowerCase()) {
    return true;
  }
  else
  return false;
}

form.addEventListener('submit', (event) => {

  if (!validation()) {
    warning.innerHTML = 'only lowecase characters allowed !';
    event.preventDefault();
 }
});
