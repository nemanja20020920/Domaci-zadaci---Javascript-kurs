let total = 0;

function addToWatchlist(element) {
  let mainEl = element.closest('.card');
  let price = parseInt(mainEl.querySelector('.price span').innerText);

  total += price;

  element.setAttribute('disabled', 'true');
  element.innerText = `Dodato`;
  mainEl.classList.add('selected');
  document.querySelector('#total').innerText = `Ukupno: $${total}`;
}

function removeFromWatchlist(element) {
  let mainEl = element.closest('.card');
  let price = parseInt(mainEl.querySelector('.price span').innerText);
  let btn = mainEl.querySelector('.add-btn');

  total -= price;

  btn.removeAttribute('disabled');
  btn.innerText = `Gledaj`;
  mainEl.classList.remove('selected');
  if (total === 0) document.querySelector('#total').innerText = ``;
  else document.querySelector('#total').innerText = `Ukupno: $${total}`;
}
