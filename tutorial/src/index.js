import React from 'react';
import { createRoot } from 'react-dom/client';
// ES6 modules

// any function for a component needs to be capatize
// stateless functional component
// always return JSX

// looks readable than the other greeting function

// JSX Rules
// return single element
// div / section / article or fragement
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// JSX fragment

function Greeting() {
  return (
    <div>
      <div>
        <h2>Hello People</h2>
        <ul>
          <a href="#">hello world</a>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

// const Greetings = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('hi', {}, 'hello world')
//   )

// }

// get the root element
const root = createRoot(document.getElementById('root'));

// render method looking two things what to going to render and where were want to render
root.render(<Greeting />);
