import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../shared/utils/const';
import './AuthPage.css';

export function AuthPage() {
    return (
        <div className="auth-page">
            <div className="auth-page__auth-container">
                <h2 className="auth-page__form-title">Еще не зарегистрированы?</h2>
                <h3 className="auth-page__form-title">Регистрация</h3>
                <form className="auth-page__form">
                    {/* <label htmlFor="email" className="auth-page__input-label"></label> */}
                    <input type="text" className="auth-page__input" name="email"/>
                    <input type="text" className="auth-page__input" name="password"/>
                    <p className="auth-page__another-form-link">Уже зарегистрированы?<br/><Link to={LOGIN_ROUTE}>Войти</Link></p>
                </form>
            </div>
        </div>
    )
}