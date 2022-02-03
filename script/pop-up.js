const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');

const modals = [{
  title: 'Tonic',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: 'images/card1.svg',
  desktopImage: 'images/Snapshoot-Portfolio1.svg',
  tech: ['html', 'css', 'javaScript'],
  details: ['CANOPY', 'Back End Dev', 2018],
},
{
  title: 'Multi-Post Stories',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and ",
  mobileImage: 'images/card2.svg',
  desktopImage: 'images/Snapshoot-Portfolio2.svg',
  tech: ['html', 'css', 'javaScript'],
  details: ['CANOPY', 'Back End Dev', 2018],
},
{
  title: 'Facebook 360',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: 'images/card3.svg',
  desktopImage: 'images/Snapshoot-Portfolio3.svg',
  tech: ['html', 'css', 'javaScript'],
  details: ['CANOPY', 'Back End Dev', 2018],
},
{
  title: 'Uber Navigation',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: 'images/card4.svg',
  desktopImage: 'images/Snapshoot-Portfolio4.svg',
  tech: ['html', 'css', 'javaScript'],
  details: ['CANOPY', 'Back End Dev', 2018],
}];

function popupWin(order) {
  // popupTitle.innerHTML = '';
  popup.style.display = 'block';
  overlay.style.opacity = 1;
  document.querySelector('.popup-title').innerHTML = `<p class="popup-title">${modals[order].title}</p>`;
  document.querySelector('.popup-details').innerHTML = `<div class="subfram">
  <p class="sub1">${modals[order].details[0]}</p>
  <div class="circle"></div>
  <p class="sub2">${modals[order].details[1]}</p>
  <div class="circle"></div>
  <p class="sub2">${modals[order].details[2]}</p>
  </div>`;
  document.querySelector('.popup-mobile-img').innerHTML = `<img class="snapshot" src="${modals[order].mobileImage}">`;
  document.querySelector('.popup-desktop-img').innerHTML = `<img class="snapshot" src="${modals[order].desktopImage}">`;
  document.querySelector('.popup-tech').innerHTML = `<ul class= "tag"> 
  <li>${modals[order].tech[0]}</li>
  <li>${modals[order].tech[1]}</li>
  <li>${modals[order].tech[2]}</li>
  </ul>`;
  document.querySelector('.popup-content').innerHTML = `<p class="popup-contect">${modals[order].text}</p>`;
}

const btn = document.querySelectorAll('.button');
for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', () => {
    popupWin(i);
  });
}

const close = document.getElementById('popup-close');
close.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.opacity = 0;
});
