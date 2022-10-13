import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/routes';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { Context } from '../../app/App';

export const Navbar = observer(() => {
    const { userStore } = useContext(Context);
    const navigate = useNavigate();

    let actionContent: JSX.Element[] | [] = [];

    if (!userStore.isAuth) {
        actionContent = [
            <button onClick={() => navigate(LOGIN_ROUTE)} className="navbar__action-btn">Войти</button>
        ];
    }

    if (userStore.isAuth) {
        actionContent = [
            <button className="navbar__action-btn">Админ панель</button>,
            <button className="navbar__action-btn" onClick={() => userStore.setIsAuth(false)}>Выйти</button>,
            <button className="navbar__action-btn navbar__action-btn_type_basket" aria-label='Корзина'/>
        ];
    }

    return (
        <header className="navbar">
            <div className="navbar__content">
                <NavLink to={SHOP_ROUTE}><h2 className="navbar__label">DeviceShop</h2></NavLink>
                <div className="navbar__action-container">
                    { actionContent }
                </div>
            </div>
        </header>
    )
});