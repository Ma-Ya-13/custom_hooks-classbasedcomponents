
// import { useState } from 'react'
// import './App.css'

// function App() {
//   return (
//     <>
//       <MyComponent />
//     </>
//   )
// }

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   function incrementCount() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   )
// }

// export default App


/////////////////////////////////////////
// class compnent version of yhe above code   wihthout hooks
import React from 'react';

class MyComponent extends React.Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Method to increment the count when the button is clicked
  incrementCount = () => {
    // Updating the count state using this.setState
    this.setState({ count: this.state.count + 1 });
  }

  // Render method to display the current count and the "Increment" button
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default  MyComponent;