// const text = document.getElementsByClassName('list');
// const line = document.getElementsByClassName('line');

// for (let i = 0; i < text.length; i++) {
//   text[i].addEventListener('mouseenter', function () {
//     line[i].style.paddingRight = '70px';
//     line[i].style.transition = '0.3s';
//     text[i].style.opacity = '1';
//   });
//   text[i].addEventListener('mouseleave', function () {
//     line[i].style.paddingRight = '40px';
//     line[i].style.transition = '0.3s';
//     text[i].style.opacity = '0.5';
//   });
// }

const section = document.querySelectorAll("main section");
const main = document.querySelector("main");
const navLinks = document.querySelectorAll("header nav .line");
const navLi = document.querySelectorAll("header nav li");

main.onscroll = () => {
  section.forEach(e => {
    let top = main.scrollTop;
    let offset = e.offsetTop;
    let height = e.offsetHeight;
    let id = e.getAttribute("id");

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector(`header nav a line`)
        .classList.add('active');
      })
    }
  });
}
