const form = document.getElementById('form');
let formName = document.getElementById('name');
let formEmail = document.getElementById('email');
let formMessage = document.getElementById('msg');
let data = {
  name: '',
  email: '',
  message: '',
};

window.onload = () => {
if (localStorage.getItem('data')) {
  data = JSON.parse(localStorage.getItem('data'));
  form.name.value = data.name;
  form.email.value = data.email;
  form.msg.value = data.message;
}
}

form.addEventListener('submit', () => {
  data.name = form.name.value;
  data.email = form.email.value;
  data.message = form.msg.value;
  localStorage.setItem('data', JSON.stringify(data));
});

form.addEventListener('reset', () => {
  window.localStorage.clear();
});