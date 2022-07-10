let btn = document.querySelector('.dugme');
let loptica = document.querySelector('.loptica');
let lopticaLeft = 10;
let lopticaTop = 10;

let lopticaPobeda = () => {
  lopticaLeft = 10;
  lopticaTop = 10;
  loptica.style.left = `${lopticaLeft}%`;
  loptica.style.top = `${lopticaTop}%`;
  let tekst = document.querySelector('h1');
  tekst.innerText = `Uspeli ste!`;
  setTimeout(
    () =>
      (tekst.innerText =
        'Ubacite lopticu u rupu, krecite se pomocu strelica na tastaturi!'),
    '1000'
  );
};

let lopticaReset = () => {
  lopticaLeft = 10;
  lopticaTop = 10;
  loptica.style.top = `${lopticaTop}%`;
  loptica.style.left = `${lopticaLeft}%`;
  let tekst = document.querySelector('h1');
  tekst.innerText = 'Pokusajte ponovo!';
  setTimeout(
    () =>
      (tekst.innerText =
        'Ubacite lopticu u rupu, krecite se pomocu strelica na tastaturi!'),
    '1000'
  );
};

btn.addEventListener('click', () => btn.classList.toggle('crvena-pozadina'));

window.addEventListener('keydown', (event) => {
  event.preventDefault();

  switch (event.keyCode) {
    case 37:
      lopticaLeft -= 5;
      loptica.style.left = `${lopticaLeft}%`;
      break;
    case 38:
      lopticaTop -= 5;
      loptica.style.top = `${lopticaTop}%`;
      break;
    case 39:
      lopticaLeft += 5;
      loptica.style.left = `${lopticaLeft}%`;
      break;
    case 40:
      lopticaTop += 5;
      loptica.style.top = `${lopticaTop}%`;
      break;
    default:
      break;
  }

  if (lopticaLeft === 90 && lopticaTop === 90) lopticaPobeda();
  else if (
    lopticaLeft < 0 ||
    lopticaLeft > 100 ||
    lopticaTop < 0 ||
    lopticaTop > 100
  )
    lopticaReset();
});
