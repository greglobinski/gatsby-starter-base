import React from 'react';

import './showit.css';

class Showit extends React.Component {
  componentDidMount() {
    this.initPresentation();
  }

  initPresentation = () => {
    const classes = [
      'article',
      'branding',
      'bodytext',
      'footer',
      'header',
      'heading',
      'layout',
      'meta',
      'menu',
      'menuItem',
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
