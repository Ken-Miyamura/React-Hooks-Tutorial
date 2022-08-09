import { useState, useEffect, useContext, useRef, useReducer, useMemo } from 'react';
import './App.css';
import myContext from './main';

interface ActionType {
  type: string;
};

const reducer = (state: number, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default: 
      return state;
  }
}

function App() {
  const [count, setCount] = useState<number>(0);
  const myInfo = useContext(myContext);
  const ref = useRef<HTMLInputElement>(null!);
  const [state, dispatch] = useReducer(reducer, 0);

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

  /**
   * useMemo（ブラウザのメモリに値を保存する）
   */ 
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // const square = () => {
  //   let i = 0;
  //   while(i < 200) {
  //     i++;
  //   }
  //   return count02 * count02;
  // };

  const square = useMemo(() => {
    let i = 0;
    while(i < 200) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  /**
   * useCallback（関数のメモ化）
   */ 

  const [counter, setCounter] = useState(0);


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

      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <div className="card">
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
      </div>

      <hr />
      <h1>useMemo</h1>
      <p>カウント1：{count01}</p>
      <p>カウント2：{count02}</p>
      <p>結果：{square}</p>
      <button onClick={() => setCount01(count01 + 1)}>count01</button>
      <button onClick={() => setCount02(count02 + 1)}>count02</button>

      <hr />
      <h1>useCallback</h1>
    </div>
  )
}

export default App
