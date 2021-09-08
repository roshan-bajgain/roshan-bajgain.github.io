const navToggle = document.querySelector('.menu');
const closebtn = document.querySelector('.close-btn');
const links = document.querySelector('.menu-items');
const navs = document.querySelectorAll('.information');
navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
});
closebtn.addEventListener('click', () => {
  links.classList.remove('show-links');
});
navs.forEach((a) => {
  a.addEventListener('click', () => {
    links.classList.remove('show-links');
  });
});
const myprojects = [
  {
    name: 'Tonic', detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', github: 'https://github.com/roshan-bajgain', liveDemoLink: 'https://roshan-bajgain.github.io/', imgUrl: 'Image/SnapshootPortfolio1.png',
  },
  {
    name: 'Multi Project', detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', github: 'https://github.com/roshan-bajgain', liveDemoLink: 'https://roshan-bajgain.github.io/', imgUrl: 'SnapshootPortfolio2.png',
  },
  {
    name: 'Tonic', detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', github: 'https://github.com/roshan-bajgain', liveDemoLink: 'https://roshan-bajgain.github.io/', imgUrl: 'SnapshootPortfolio3.png',
  },
  {
    name: 'Multi Project', detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', github: 'https://github.com/roshan-bajgain', liveDemoLink: 'https://roshan-bajgain.github.io/', imgUrl: 'SnapshootPortfolio4.png',
  },
];

const popUpProject = (popUpdata) => {
  const popUpItem = `<div id="popUp-view">
     <div class="popUp-card">
     <img src="x.svg" alt="close" id="popUp-Close" onclick="popupClose();">
     <h2 class="card-title">${popUpdata.name}</h2>
         <div class="work-detail-box">
             <ul>
                 <li class=" work-detail canopy">CANOPY </li>
                 <li class="work-detail work-text">Back End Dev </li>
                 <li class="work-detail work-text">2015</li>
             </ul>
         </div>`
}