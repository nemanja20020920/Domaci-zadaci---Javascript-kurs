let animatedTextSection = document.querySelector('.section1');

animatedTextSection.addEventListener('click', () => {
  let textTag = document.querySelector('.section1  h1');
  let text = textTag.textContent;
  
  let splittedText = text.split('');
  
  textTag.innerHTML = '';
  
  for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] == ' ') {
      splittedText[i] = '&nbsp;';
    }
    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
  }
  
  let spans = textTag.querySelectorAll('span');
  let k = 0;
  let interval = setInterval(() => {
    let singleSpan = spans[k];
  
    singleSpan.className = 'fadeMove';
    k++;
  
    if (k === spans.length) {
      clearInterval(interval);
    }
  }, 200);
});

let border = document.querySelector('.border-line');
let animationWidth = 0;
let buttons = document.querySelectorAll('.line-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if(button.id === 'plus') {
      animationWidth += 5;
      if(animationWidth > 100) animationWidth = 100;
      border.style.width = `${animationWidth}%`;
    } else {
      animationWidth -= 5;
      if(animationWidth < 0) animationWidth = 0;
      border.style.width = `${animationWidth}%`;
    }
  });
});


let leftImage = document.querySelector('.slideFromLeft');
let rightImage = document.querySelector('.slideFromRight');
let imageButtons = document.querySelectorAll('.image-button');

imageButtons.forEach(button => {
  button.addEventListener('click', () => {
    if(button.id === 'left') {
      leftImage.classList.add('animated');
      button.setAttribute('disabled', 'disabled');
    } else {
      rightImage.classList.add('animated');
      button.setAttribute('disabled', 'disabled');
    }
  });
});
