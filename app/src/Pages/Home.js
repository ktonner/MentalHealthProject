import React from 'react';

function Home(){
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Brain Fort
        </p>
        <a
          className="App-link"
          href='/enter'
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </header>
    </div>
  );
}

export default Home