import React from 'react';

import './showit.css';

class Showit extends React.Component {
  componentDidMount() {
    this.initBar();

    if (sessionStorage.getItem('showit') === 'yes') {
      this.showIt();
    }

    document.querySelector('body').addEventListener('change', this.toggleShow);
  }

  componentWillUnmount() {
    document
      .querySelector('body')
      .removeEventListener('change', this.toggleShow);
  }

  toggleShow = event => {
    if (event.target.tagName.toLowerCase() === 'input') {
      if (event.target.checked) {
        this.showIt();
        sessionStorage.setItem('showit', 'yes');
      } else {
        this.hideIt();
        sessionStorage.setItem('showit', 'no');
      }
    }
  };

  initBar = () => {
    const bar = document.createElement('DIV');
    const barLabel = document.createElement('LABEL');
    const barTxt = document.createTextNode(
      'Show a structure of the components'
    );
    const barCheck = document.createElement('INPUT');

    bar.classList.add('bar');
    barLabel.appendChild(barTxt);
    barCheck.type = 'checkbox';

    if (sessionStorage.getItem('showit') === 'yes') {
      barCheck.checked = true;
    }

    barLabel.appendChild(barCheck);
    bar.appendChild(barLabel);
    document.body.appendChild(bar);
  };

  hideIt = () => {
    const components = document.querySelectorAll('.showit');

    for (let i = components.length; i > 0; i--) {
      const label = components[i - 1].querySelector('.label');
      components[i - 1].removeChild(label);
      components[i - 1].classList.remove('showit');
    }
  };

  showIt = () => {
    const classes = [
      'article',
      'article ',
      'branding',
      'bodytext',
      'footer',
      'header',
      'heading',
      'layout',
      'meta',
      'menu',
      'menuItem',
      'blog',
      'blogItem',
      'post',
      'page',
      'article post',
      'article page',
      'comments',
      'author',
      'nextPrev',
      'share',
    ];

    const components = document.querySelectorAll('[class]');

    components.forEach(comp => {
      const name = comp.getAttribute('class');

      if (!classes.includes(name)) {
        return;
      }

      const label = document.createElement('SPAN');
      const txt = document.createTextNode(name);

      label.appendChild(txt);
      label.classList.add('label');

      comp.appendChild(label);

      comp.classList.add('showit');
    });
  };

  render() {
    return null;
  }
}

export default Showit;
