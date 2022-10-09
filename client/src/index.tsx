import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './app/App';
import reportWebVitals from './reportWebVitals';
import UserStore from './entities/User/store/UserStore';
import DeviceStore from './entities/Device/store/DeviceStore';

export const Context = React.createContext<any>(null);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
      <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
      }}>
        <App />
      </Context.Provider>
    </React.StrictMode>
);

reportWebVitals();
