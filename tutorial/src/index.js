import React from 'react';
import { createRoot } from 'react-dom/client';
// ES6 modules




// any function for a component needs to be capatize  
function Greeting() {
  return <h4>This is John and this is my first componenet</h4>;

}

// get the root element
const root = createRoot(document.getElementById('root'));

// render method looking two things what to going to render and where were want to render
root.render(<Greeting />);




