const aTag = document.querySelectorAll('nav ul li a');
const line = document.querySelectorAll('nav ul li a .line');

aTag.forEach((x) => {
  x.addEventListener('mouseover', () => {
    line.forEach((n) => {
      n.addEventListener('mouseover', () => {
        n.style.transition = '0.5s';
      });
      console.log(x);
    });
  });
});

const sectionContent = document.querySelectorAll('main section');
const content = document.getElementById('content');
const navLinks = document.querySelectorAll('nav a');

content.onscroll = () => {
  sectionContent.forEach((sec) => {
    let top = content.scrollTop;
    let scrollHeight = sec.offsetHeight;
    let scrollTop = sec.offsetTop - 100;
    let id = sec.getAttribute('id');
    if (top >= scrollTop && top <= scrollTop + scrollHeight) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector(`nav a[href*= ${id}]`).classList.add('active');
      });
    }
  });
};
