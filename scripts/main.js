import sayHello from './say-hello';

const imgElement = document.createElement('img');

require('../styles/main.scss');
sayHello('World', document.querySelector('h2'));

imgElement.src = require('../images/webpack.png');
document.body.appendChild(imgElement);