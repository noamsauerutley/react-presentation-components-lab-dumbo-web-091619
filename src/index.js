import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let handleClick = () => {
console.log(":)")
}
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.handleClick} />
  </div>,
  document.getElementById('root')
);