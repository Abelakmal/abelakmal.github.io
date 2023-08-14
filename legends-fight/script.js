const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 578;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 1;

class Character {
  constructor({ position, color, velocity, hp }) {
    this.position = position;
    this.color = color;
    this.velocity = velocity;
    this.height = 150;
    this.lastkey;
    this.attackBox = {
      position: this.position,
      width: 100,
      height: 50,
    };
    this.hp = hp;
  }

  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, 50, this.height);

    // attacknox
    c.fillStyle = 'white';
    c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;
  }
}

const samurai = new Character({
  position: {
    x: 412,
    y: 0,
  },
  color: 'yellow',
  velocity: {
    x: 0,
    y: 10,
  },
  hp: 100,
});
const enemy = new Character({
  position: {
    x: 612,
    y: 0,
  },
  color: 'red',
  velocity: {
    x: 0,
    y: 10,
  },
  hp: 100,
});

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function animation() {
  window.requestAnimationFrame(animation);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  samurai.update();
  enemy.update();

  samurai.velocity.x = 0;

  if (keys.d.pressed && samurai.lastkey === 'd') {
    samurai.velocity.x = 10;
  } else if (keys.a.pressed && samurai.lastkey === 'a') {
    samurai.velocity.x = -10;
  }


  if (samurai.attackBox.position.x + samurai.attackBox.width >= enemy.position.x &&  enemy.hp != 0) {
    console.log(enemy.hp -= 1);
  }else if(enemy.hp === 0){
  }
}
animation();

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'd':
      keys.d.pressed = true;
      samurai.lastkey = 'd';
      break;
    case 'a':
      keys.a.pressed = true;
      samurai.lastkey = 'a';
      break;
    case 'w':
      if(samurai.velocity.y == 0){
        samurai.velocity.y = -25;
      }
      break;
  }
});

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'd':
      keys.d.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
  }
});
