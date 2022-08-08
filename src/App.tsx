import { useState, useEffect, useContext, useRef } from 'react';
import './App.css';
import myContext from './main';

function App() {
  const [count, setCount] = useState(0);
  const myInfo = useContext(myContext);
  const ref = useRef<HTMLInputElement>(null!);

  const handleClick = (): void => {
    setCount(count => count + 1);
  };

  useEffect((): void => {
    // countと依存関係にある状態でuseEffectの中でsetCount関数を使うと、無限ループしてしまうので絶対に使わない
    console.log('Hello Hooks');
  }, [count]);

  const handleRef = (): void => {
    console.log(ref.current.value);
  };

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
      <hr />
      <h1>useContext</h1>
      <p>{myInfo.name}</p>
      <p>{myInfo.age}</p>
      <hr />
      <h1>useRef</h1>
     
      <div className="card">
        <input type="text" ref={ref} />
        <button onClick={handleRef}>
          useRef
        </button>
      </div>
    </div>
  )
}

export default App
