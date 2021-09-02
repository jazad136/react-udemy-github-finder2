import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  foo = () => 'Bars'
  render() {
    const name = 'John Doe';
    const loading = false;
    const showName = true;
    //if(loading) {
    //  return <h4>Loading...</h4>
    //}
    //return (
    //  <div className='App'>
    //   <h1>Hello {name}</h1>
    //  </div>
    //);
    // return( 
    //   <div className='App'>
    //       {loading ? (
    //         <h4>Loading...</h4> 
    //        ) : (
    //         <h1>Hello {showName ? name : null} </h1>)
    //       }
    //   </div>
    // );
    // note the && below
    return( 
      <div className='App'>
          {loading ? (<h4>Loading...</h4>) : (<h1>Hello {showName && name} </h1>)}
      </div>
    );
  
  }

}

export default App;
