//Ovo je responsive meni

let menu = document.querySelector('.header ul');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => mobileMenu());

const mobileMenu = () => {
  if (btn.innerText === 'MENU') {
    menu.style.display = 'block';
    btn.innerText = 'CLOSE';
  } else {
    menu.style.display = 'none';
    btn.innerText = 'MENU';
  }
};

//Ovo je galerija

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

const moveRight = () => {
  displayNone();
  imgNum++;
  if (imgNum === pictures.length) imgNum = 0;
  pictures[imgNum].style.display = 'block';
};

const moveLeft = () => {
  displayNone();
  imgNum--;
  if (imgNum < 0) imgNum = pictures.length - 1;
  pictures[imgNum].style.display = 'block';
};

rightBtn.addEventListener('click', moveRight);

leftBtn.addEventListener('click', moveLeft);

const displayNone = () => {
  pictures.forEach((picture) => (picture.style.display = 'none'));
};
//Ovo je portfolio

let portfolioBtn = document.querySelectorAll('.portfolio-btn');
let portfolioItems = document.querySelectorAll('.portfolio-single-item');

portfolioBtn.forEach((btn) => {
  btn.addEventListener('click', () => portfolioSort(btn));
});

const portfolioSort = (btn) => {
  let category = btn.getAttribute('data-category');
  portfolioItems.forEach((item) => (item.style.display = 'none'));

  if (category === 'sve')
    portfolioItems.forEach((item) => (item.style.display = 'block'));

  portfolioItems.forEach((item) => {
    if (item.getAttribute('data-category').includes(category))
      item.style.display = 'block';
  });
};

//Ovo je modal

let modalBtn1 = document.querySelector('#modal-btn-1');
let modalBtn2 = document.querySelector('#modal-btn-2');

modalBtn1.addEventListener('click', () => {
  let modalWindow = document.querySelector('#modal-1');
  let closeBtn = modalWindow.querySelector('button');
  openModal(modalWindow);
  closeBtn.addEventListener('click', () => closeModal(modalWindow));
});

modalBtn2.addEventListener('click', () => {
  let modalWindow = document.querySelector('#modal-2');
  let closeBtn = modalWindow.querySelector('button');
  openModal(modalWindow);
  closeBtn.addEventListener('click', () => closeModal(modalWindow));
});

const openModal = (modalWindow) => {
  let overlay = document.querySelector('.overlay');
  modalWindow.style.display = 'block';
  overlay.style.display = 'block';
};

const closeModal = (modalWindow) => {
  let overlay = document.querySelector('.overlay');
  modalWindow.style.display = 'none';
  overlay.style.display = 'none';
};
