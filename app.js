const navToggle = document.querySelector(".menu");
const closebtn = document.querySelector(".closebtn");
const links = document.querySelector(".menu-items")
navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});
closebtn.addEventListener('click', function() {
    links.classList.remove('show-links');
});