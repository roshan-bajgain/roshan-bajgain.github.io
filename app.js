const navToggle = document.querySelector('.menu');
const closebtn = document.querySelector('.close-btn');
const workPopUpCard = document.getElementById('work-popup-section');
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
    name: 'Tonic',
    detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    github: 'https://github.com/roshan-bajgain',
    liveDemoLink: 'https://roshan-bajgain.github.io/',
    imgUrl: 'Image/SnapshootPortfolio1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Multi Project',
    detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    github: 'https://github.com/roshan-bajgain',
    liveDemoLink: 'https://roshan-bajgain.github.io/',
    imgUrl: 'SnapshootPortfolio2.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Tonic',
    detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    github: 'https://github.com/roshan-bajgain',
    liveDemoLink: 'https://roshan-bajgain.github.io/',
    imgUrl: 'SnapshootPortfolio3.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Multi Project 4',
    detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    github: 'https://github.com/roshan-bajgain',
    liveDemoLink: 'https://roshan-bajgain.github.io/',
    imgUrl: 'SnapshootPortfolio4.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

const popUpProject = (popUpdata) => {
  const popUpItem = `<div id="popUp-view">
     <div class="popUp-card">
     <img src="x.svg" alt="close" id="popUp-Close">
     <h2 class="card-title">${popUpdata.name}</h2>
         <div class="work-detail-box">
             <ul>
                 <li class=" work-detail canopy">CANOPY </li>
                 <li class="work-detail work-text det">Back End Dev </li>
                 <li class="work-detail work-text det">2015</li>
             </ul>
         </div>
         <div class="card-image">
         <img class="work-snapshot" src=${popUpdata.imgUrl}
             alt="snapshot">
     </div>
     <div class="work">
         <p class="work-description">${popUpdata.detailDescription}</p>
         <div>
             <div class="work-detail-box">
                 <ul>
                    ${popUpdata.technologies.map((item) => `<li class="btn1">${item}</li>`).join('')}
                 </ul>
             </div>
             <div id="work-buttons">
             <div class="work-button1"><a class="project-button" href=${popUpdata.liveDemoLink}>See Live <img
                 src="live1.png" alt="live" id="live"></a>
             </div>
             <div class="work-button1"><a class="project-button" href=${popUpdata.github}>See Source <img src="github.png" alt="github" id="pop-github"></a></div>
         </div>
     </div>
 </div>
</div>
</div>`;
  workPopUpCard.innerHTML = popUpItem;
};

const myprojectWork = (data, index) => {
  const reverse = index % 2 === 1;
  return `
  <section class="works ${reverse ? 'works-reverse' : ''}">
    <div class="snapp">
      <img class="snapshoot-portfolia" src=${data.imgUrl} alt="portfolio-snapshoot ${index}">
    </div>
    <div class="content2">  
      <h3 class="heading">${data.name}</h3>
      <div class="details">
        <h5>CANOPY</h5>
        <img class="dot" src="Counter.png" alt="counter-sign">
        <p class="det">Back End Dev</p>
        <img class="dot" src="Counter.png" alt="counter-sign">
        <p class="det">2015</p>
      </div>
      <p class="content">${data.description}</p>
        <ul class="btn">
            ${data.technologies.map((item) => `<li class="btn1">${item}</li>`).join('')}
        </ul>
      <button class="btn2 project-btn" id="project-${index}" data-project-id="${index}" type="button">See Project</button>
    </div>
  </section>`;
};

const worksection = document.getElementById('work-section');
myprojects.forEach((project, index) => {
  worksection.innerHTML += myprojectWork(project, index);
});

document.querySelectorAll('.project-btn').forEach((item) => {
  item.addEventListener('click', () => {
    const { projectId } = item.dataset;
    popUpProject(myprojects[projectId]);
    workPopUpCard.classList.add('open');
  });
});

document.addEventListener('click', (event) => {
  if (event.target.id === 'popUp-Close') {
    workPopUpCard.classList.remove('open');
    workPopUpCard.innerHTML = '';
  }
});