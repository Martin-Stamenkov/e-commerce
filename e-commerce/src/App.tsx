import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { commerce } from "./lib/client";


function App() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      commerce.categories.list().then((category) => console.log(category));
      commerce.products.list().then((product) => console.log(product));
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
