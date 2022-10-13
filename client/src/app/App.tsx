import React from "react";
import UserStore from "../entities/User/store/UserStore";
import { Navbar } from "../shared/Navbar";
import './App.css';
import { AppRouter } from "./AppRouter";

export const Context = React.createContext<any>(null);

export function App() {
  return (
    <Context.Provider value={{
      userStore: new UserStore()
    }}>
      <div className="app">
        <Navbar />
        <AppRouter />
      </div>
    </Context.Provider>
  );
}