const a = document.querySelectorAll('nav ul li a');
const line = document.querySelectorAll('nav ul li .line');
console.log(a[0].id);

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }
    this.className += ' active';
  });

  if (a[i].id != 'a1') {
    a[i].addEventListener('click', function () {
      document.getElementById('a1').classList.remove('active');
    });
  }

  a[i].addEventListener('mouseout', function () {
    line[i].style.transition = '0.5s';
  });
}

console.log("test");