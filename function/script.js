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

const btn_span = document.querySelectorAll('#skill span');
const skillContent = document.querySelectorAll('.teknologi ul li');
let active = null;

btn_span.forEach((s) => {
  s.addEventListener('click', function () {
    if (active != null) {
      active.classList.remove('active');
    }

    if (btn_span[0].getAttribute('class')) {
      btn_span[0].classList.remove('active');
    }

    if (active != this) {
      this.classList.add('active');
      active = this;
    } else {
      active = null;
    }
  });
});

btn_span[0].addEventListener('click', () => {
  contentSkill('React Js', 'Next Js', 'Tailwind');
});
btn_span[1].addEventListener('click', () => {
  contentSkill('Express js', 'Node Js', 'Spring Boot');
});
btn_span[2].addEventListener('click', () => {
  contentSkill('Javascript', 'Java', '');
});

const contentSkill = (satu, dua, tiga) => {
  skillContent[0].innerHTML = satu;
  skillContent[1].innerHTML = dua;
  skillContent[2].innerHTML = tiga;
};
