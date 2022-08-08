import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

interface Info {
  name: string;
  age: number;
}

const myInfo: Info = {
  name: 'Ken Miyamura',
  age: 26
};

const myContext = createContext(myInfo);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <myContext.Provider value={myInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </myContext.Provider>
)

export default myContext;
