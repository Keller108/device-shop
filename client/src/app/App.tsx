import jwtDecode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { check } from "../entities/User/api/userApi";
import { UserModel } from "../entities/User/model/UserModel";
import { userContext } from "../processes/UserProcess";
import { Navbar } from "../shared/Navbar";
import { SHOP_ROUTE } from "../shared/utils/routes";
import './App.css';
import { AppRouter } from "./AppRouter";

export function App() {
  const { userStore } = useContext(userContext);
  const [user, setUser] = useState(userStore.user as UserModel);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('jwt');
    userStore.setIsAuth(false);
    setUser({} as UserModel);
    navigate(SHOP_ROUTE);
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        check().then((res) => {
            if (res) {
                if (jwt !== res.token) {
                    localStorage.setItem('jwt', res.token);
                    let user: UserModel = jwtDecode(jwt);
                    let { id, email, role } = user;
                    userStore.setUser({ id, email, role });
                    setUser({ id, email, role });
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

  useEffect(() => {
    tokenCheck();
  }, [userStore.isAuth])

  return (
    <userContext.Provider value={{userStore}}>
      <div className="app">
        <Navbar email={user.email} signOut={signOut}/>
        <AppRouter />
      </div>
    </userContext.Provider>
  );
}