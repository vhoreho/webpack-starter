import lodash from 'lodash';
import './styles/style.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
