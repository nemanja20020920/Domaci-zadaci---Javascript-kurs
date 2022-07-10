const inputs = document.querySelectorAll('input');

let greske = {
  ime_prezime: [],
  korisnicko_ime: [],
  email: [],
  ponovi_lozinku: []
};

inputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    const changedInput = e.target;
    const inputValue = changedInput.value;
    const inputName = changedInput.getAttribute('name');

    if(inputValue.length > 4) {
      greske[inputName] = [];
      switch(inputName) {
        case 'ime_prezime': 
          let name = inputValue.trim();
          name = name.split(' ');
          if(name.length < 2) {
            greske[inputName].push('Morate uneti i ime i prezime!');
          }
          break;
        case 'email':
          if(!isValid(inputValue)) {
            greske[inputName].push('Email nije validan!');
          }
          break;
        case 'ponovi_lozinku':
          let lozinka = document.querySelector('#lozinka').value;
          if(inputValue !== lozinka) {
            greske[inputName].push('Lozinke nisu iste!');
          }
          break;
        default: break;
      }
    } else {
      greske[inputName] = ['Morate uneti minimum 5 karaktera!'];
    }

    ispisiGreske();
  });
});

const ispisiGreske = () => {
  for(let element of document.querySelectorAll('ul')) {
    element.remove();
  }

  for(let key of Object.keys(greske)) {
    let input = document.querySelector(`input[name=${key}]`);
    let parentElement = input.parentElement;
    let newElement = document.createElement('ul');
    parentElement.appendChild(newElement);

    greske[key].forEach((greska) => {
      let li = document.createElement('li');
      li.innerText = greska;
      newElement.appendChild(li);
    });
  }
};

const isValid = email => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email) ? true : false;