const aTag = document.querySelectorAll('nav ul li a');
const line = document.querySelectorAll('nav ul .line');

for (let i = 0; i < aTag.length; i++) {
  aTag[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }
    this.className += ' active';
  });

  if (aTag[i].id != 'a1') {
    aTag[i].addEventListener('click', function () {
      document.getElementById('a1').classList.remove('active');
    });
  }

  aTag[i].addEventListener('mouseout', function () {
    line[i].style.transition = '0.5s';
  });
}