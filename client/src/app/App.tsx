import React from "react";
import { BrowserRouter } from "react-router-dom";
import DeviceStore from "../entities/Device/store/DeviceStore";
import UserStore from "../entities/User/store/UserStore";
import { Navbar } from "../shared/Navbar";
import './App.css';
import { AppRouter } from "./AppRouter";

export const Context = React.createContext<any>(null);

export function App() {
    return (
      <Context.Provider value={{
        userStore: new UserStore(),
        deviceStore: new DeviceStore()
      }}>
        <BrowserRouter>
          <div className="app">
            <Navbar />
            <AppRouter />
          </div>
        </BrowserRouter>
      </Context.Provider>
    );
}
