document.addEventListener('DOMContentLoaded', function () {
  const donutImages = document.querySelectorAll('.carrossel-donut img');
  const principalImage = document.getElementById('principal-img');
  const galeriaDonut = document.querySelector('.galeria-donut');
  const button = document.querySelector('.apresentacao button');

  const themes = {
    chocolate: {
      background: 'linear-gradient(45deg, #6b4226, #8b5e34)',
      img: './assets/Chocolate-principal.png',
    },
    pink: {
      background: 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
      img: './assets/Pink-principal.png',
    },
    biscuits: {
      background: 'linear-gradient(45deg, #d6a87c, #b7795e)',
      img: './assets/Biscuits-principal.png',
    },
    strawberry: {
      background: 'linear-gradient(45deg, #fe6060, #fd5e7f)',
      img: './assets/Strawberry-principal.png',
    }
  };

  donutImages.forEach(img => {
    img.addEventListener('click', function () {
      const themeName = img.getAttribute('data-theme');
      const theme = themes[themeName];
      galeriaDonut.style.background = theme.background;
      button.style.background = theme.background;
      principalImage.style.opacity = 0;
      setTimeout(() => {
        principalImage.src = theme.img;
        principalImage.style.opacity = 1;
      }, 500);
    });
  });
});
