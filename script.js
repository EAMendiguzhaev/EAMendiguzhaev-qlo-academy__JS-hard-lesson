'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const DomElement = function (selector, options) {
    this.selector = selector;
    options = options || {};
    this.height = options.height;
    this.width = options.width;
    this.bg = options.bg;
    this.position = options.position;
  };

  DomElement.prototype.render = function () {
    let div = document.createElement('div');
    div.classList.add(this.selector);

    div.style.cssText = `height: ${this.height};
                   width: ${this.width};
                   background-color:  ${this.bg};
                   font-size: ${this.fontSize};
                   position: ${this.position}`;
    document.body.insertAdjacentElement('beforeEnd', div);
  };

  const element = new DomElement('element', {
    height: '100px',
    width: '100px',
    bg: '#b3ffda',
    position: 'absolute',
  });
  element.render();

  let moveRightAndLeft = 0;
  let moveUpAndBottom = 0;

  document.addEventListener('keydown', function (event) {
    let elementBody = document.querySelector('.element');

    if (event.keyCode === 40) {
      moveUpAndBottom += 10;
      elementBody.style.marginTop = moveUpAndBottom + 'px';
      console.log('Вниз');
    } else if (event.keyCode === 39) {
      moveRightAndLeft += 10;
      elementBody.style.marginLeft = moveRightAndLeft + 'px';
      console.log('Вправо');
    } else if (event.keyCode === 38) {
      moveUpAndBottom -= 10;
      elementBody.style.marginTop = moveUpAndBottom + 'px';
      console.log('Вверх');
    } else if (event.keyCode === 37) {
      moveRightAndLeft -= 10;
      elementBody.style.marginLeft = moveRightAndLeft + 'px';
      console.log('Влево');
    }
  });
});
