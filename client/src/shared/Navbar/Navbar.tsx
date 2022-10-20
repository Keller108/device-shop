import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/routes';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { observer } from 'mobx-react-lite';
import { userContext } from '../../processes/UserProcess';

type NavbarProps = {
    email: string;
    signOut: () => void;
}

export const Navbar = observer(({ email, signOut }: NavbarProps) => {
    const { userStore } = useContext(userContext);
    const navigate = useNavigate();

    let actionContent: JSX.Element[] | [] = [];

    if (!userStore.isAuth) {
        actionContent = [
            <button key="sign-in" onClick={() => navigate(LOGIN_ROUTE)} className="navbar__action-btn">Войти</button>
        ];
    }

    if (userStore.isAuth) {
        actionContent = [];
        //@ts-ignore
        if (userStore.user.role === "ADMIN") {
            actionContent = [
                <button key="admin-panel" className="navbar__action-btn">Админ панель</button>,
                <button key="exit" className="navbar__action-btn" onClick={() => signOut()}>Выйти</button>,
                <button key="basket" className="navbar__action-btn navbar__action-btn_type_basket" aria-label='Корзина'/>
            ];
        } else {
            actionContent = [
                <button key="exit" className="navbar__action-btn" onClick={() => signOut()}>Выйти</button>,
                <button key="basket" className="navbar__action-btn navbar__action-btn_type_basket" aria-label='Корзина'/>
            ];
        }
    }

    return (
        <header className="navbar">
            <div className="navbar__content">
                <NavLink to={SHOP_ROUTE}><h2 className="navbar__label">DeviceShop</h2></NavLink>
                <div className="navbar__action-container">
                    {email && <p className="navar__user-email">{email}</p>}
                    { actionContent }
                </div>
            </div>
        </header>
    )
});