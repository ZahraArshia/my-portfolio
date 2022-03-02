const hamburger = document.getElementById('hamburger');
const hamburgerDisplay = document.getElementById('hamburgerDisplay');
const hamburgerClose = document.getElementById('hamburgerClose');
const menuWorks = document.getElementById('menuWorks');
const menuAbout = document.getElementById('menuAbout');
const menuContact = document.getElementById('menuContact');

hamburger.addEventListener('click' , () => {
  hamburgerDisplay.style.display = 'flex';
});

hamburgerClose.addEventListener('click' , () => {
  hamburgerDisplay.style.display = 'none';
});

menuWorks.addEventListener('click' , () => {
  hamburgerDisplay.style.display = 'none';
});

menuAbout.addEventListener('click' , () => {
  hamburgerDisplay.style.display = 'none';
});

menuContact.addEventListener('click' , () => {
  hamburgerDisplay.style.display = 'none';
});