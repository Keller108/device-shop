import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/const';
import './Navbar.css';

export function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__content">
                <NavLink to={SHOP_ROUTE}><h2 className="navbar__label">DeviceShop</h2></NavLink>
                <div className="navbar__action-container">
                    <button className="navbar__action-btn">Залогиниться</button>
                    <button className="navbar__action-btn">Выйти</button>
                    <button className="navbar__action-btn navbar__action-btn_type_basket" aria-label='Корзина'/>
                </div>
            </div>
        </header>
    )
}