import { observer } from "mobx-react-lite";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import DeviceStore from "../entities/Device/store/DeviceStore";
import UserStore from "../entities/User/store/UserStore";
import { Navbar } from "../shared/Navbar";
import './App.css';
import { AppRouter } from "./AppRouter";

export const Context = React.createContext<any>(null);

export const App = observer(() => {
  return (
    <Context.Provider value={{
      userStore: new UserStore(),
      deviceStore: new DeviceStore()
    }}>
      <div className="app">
        <Navbar />
        <AppRouter />
      </div>
    </Context.Provider>
  );
});