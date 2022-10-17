import jwtDecode from "jwt-decode";
import { toJS } from "mobx";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { check } from "../entities/User/api/userApi";
import { UserModel } from "../entities/User/model/UserModel";
import UserStore from "../entities/User/store/UserStore";
import { userContext } from "../processes/UserProcess";
import { Navbar } from "../shared/Navbar";
import { SHOP_ROUTE } from "../shared/utils/routes";
import './App.css';
import { AppRouter } from "./AppRouter";

export function App() {
  const { userStore } = useContext(userContext);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('jwt');
    userStore.setIsAuth(false);
    navigate(SHOP_ROUTE);
  };

  const tokenCheck = () => {
    let user;
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
        check().then((res) => {
            if (res) {
                if (jwt !== res.token) {
                    localStorage.setItem('jwt', res.token);
                    user = jwtDecode(jwt);
                    let { id, email, role }: any  = user
                    userStore.setUser({ id, email, role });
                    userStore.setIsAuth(true);
                }
            }
        }).catch((err) => console.log(`Ошибка ${err.message}`));
    } else {
        localStorage.removeItem('jwt');
        check().then((res) => {
            if (res) {
                //@ts-ignore
                console.log('res token', jwtDecode(res.token)
            )};
        });
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [])

  return (
    <userContext.Provider value={{userStore}}>
      <div className="app">
        <Navbar signOut={signOut}/>
        <AppRouter />
      </div>
    </userContext.Provider>
  );
}