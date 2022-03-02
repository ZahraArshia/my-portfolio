const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');

const modals = [{
  title: 'Mchine Learning Course',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: 'images/mobile.png',
  desktopImage: 'images/mobile.png',
  tech: ['html', 'css', 'javaScript'],
  details: ['Microverse', 'front End Dev', 2022],
  seeLive:'https:zahraarshia.github.io/machin-learning-online-courses/',
  seeSource: 'https:github.com/ZahraArshia/machin-learning-online-courses',
},
{
  title: 'Multi-Post Stories',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and ",
  mobileImage: 'images/card2.svg',
  desktopImage: 'images/Snapshoot-Portfolio2.svg',
  tech: ['html', 'css', 'javaScript'],
  details: ['CANOPY', 'Back End Dev', 2018],
  seeLive:'',
  seeSource: '',
},
{
  title: 'Facebook 360',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: 'images/card3.svg',
  desktopImage: 'images/Snapshoot-Portfolio3.svg',
  tech: ['html', 'css', 'javaScript'],
  details: ['CANOPY', 'Back End Dev', 2018],
  seeLive:'',
  seeSource: '',
},
{
  title: 'Uber Navigation',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: 'images/card4.svg',
  desktopImage: 'images/Snapshoot-Portfolio4.svg',
  tech: ['html', 'css', 'javaScript'],
  details: ['CANOPY', 'Back End Dev', 2018],
  seeLive:'',
  seeSource: '',
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
  document.querySelector('.popup-bottons').innerHTML = `<button class="popup-button" onclick="window.location.href='${modals[order].seeLive}';">See Live <img src="images/popup-live.svg" alt="see live version of the page"></button>
  <button class="popup-button" onclick="window.location.href='${modals[order].seeSource}';">See Source <img src="images/popup-GitHub.svg" alt="see the github source code"></button>`;
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
