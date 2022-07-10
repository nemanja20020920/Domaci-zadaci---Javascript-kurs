function addTask() {
  let task = document.querySelector('#input').value;
  if (!task) {
    alert('Molim Vas dodajte zadatak!');
    return;
  }
  let newElement = document.createElement('li');
  newElement.classList = 'list-item';
  newElement.innerHTML = `<span>&#10003;</span><h2>${task}</h2><button class="remove">&#9747;</button>`;
  document.querySelector('.list').appendChild(newElement);

  let remove = document.querySelectorAll('.remove');
  for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
      let removedElement = this.parentElement;
      removedElement.style.display = 'none';
    };
  }

  let check = document.querySelectorAll('.list-item');
  for (let i = 0; i < check.length; i++) {
    check[i].onclick = function () {
      let checked = this;
      checked.classList.toggle('checked');
    };
  }
}
