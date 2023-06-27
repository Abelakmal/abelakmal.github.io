const text = document.getElementsByClassName('list');
const line = document.getElementsByClassName('line');

for (let i = 0; i < text.length; i++) {
  text[i].addEventListener('mouseenter', function () {
    line[i].style.paddingRight = '70px';
    line[i].style.transition = '0.3s';
    text[i].style.opacity = '1';
  });
  text[i].addEventListener('mouseleave', function () {
    line[i].style.paddingRight = '40px';
    line[i].style.transition = '0.3s';
    text[i].style.opacity = '0.5';
  });
}
function changeLanguage(lang) {
  const words = document.getElementsByTagName('p');
  if (lang === 'id') {
    words[0].innerHTML = 'Halo, saya seorang pemula yang menyukai dunia coding dan selalu berusaha untuk memaksimalkan kemampuan saya';
  }else if (lang === 'en'){
    words[0].innerHTML = "Hello, I'm a beginner who loves the world of coding and constantly strives to maximizes my skil.";
  }
}
