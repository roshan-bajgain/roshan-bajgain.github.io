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
console.log(navs);
navs.forEach(a=> {
  a.addEventListener('click',()=> {
    console.log('click')
    links.classList.remove('show-links');
  })
})