import { toJS } from "mobx";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { check } from "../entities/User/api/userApi";
import UserStore from "../entities/User/store/UserStore";
import { userContext } from "../processes/UserProcess";
import { Navbar } from "../shared/Navbar";
import { SHOP_ROUTE } from "../shared/utils/routes";
import './App.css';
import { AppRouter } from "./AppRouter";

export const Context = React.createContext<any>(null);

export function App() {
  const { userStore } = useContext(userContext);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('jwt');
    userStore.setIsAuth(false);
    navigate(SHOP_ROUTE);
  };

  const tokenCheck = () => {
    if (userStore.isAuth) {
        //@ts-ignore
        let { id, email, role } = userStore.user;
        check(id, email, role).then((res: Response) => console.log(res));
    }
  }

  useEffect(() => {
    if (userStore.user) {
        tokenCheck();
    }
  }, [userStore.user])

  return (
    <userContext.Provider value={{
      userStore: new UserStore()
    }}>
      <div className="app">
        <Navbar signOut={signOut}/>
        <AppRouter />
      </div>
    </userContext.Provider>
  );
}