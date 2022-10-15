import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserStore from "../entities/User/store/UserStore";
import { Navbar } from "../shared/Navbar";
import { SHOP_ROUTE } from "../shared/utils/routes";
import './App.css';
import { AppRouter } from "./AppRouter";

export const Context = React.createContext<UserStore | any>(null);

export function App() {
  const { userStore } = useContext(Context);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('jwt');
    userStore.setIsAuth(false);
    navigate(SHOP_ROUTE);
  };

  return (
    <Context.Provider value={{
      userStore: new UserStore()
    }}>
      <div className="app">
        <Navbar signOut={signOut}/>
        <AppRouter />
      </div>
    </Context.Provider>
  );
}