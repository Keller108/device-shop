import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { SHOP_ROUTE } from '../utils/const';
import './Navbar.css';

export const Navbar = observer(() => {
    const { user } = useContext(Context);

    let actionContent: JSX.Element[] | [] = [];

    if (!user.isAuth) {
        actionContent = [
            <button onClick={() => user.setIsAuth(true)} className="navbar__action-btn">Войти</button>
        ];
    }

    if (user.isAuth) {
        actionContent = [
            <button className="navbar__action-btn">Админ панель</button>,
            <button className="navbar__action-btn" onClick={() => user.setIsAuth(false)}>Выйти</button>,
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