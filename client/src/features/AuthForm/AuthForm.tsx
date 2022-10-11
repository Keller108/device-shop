import { Link } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../shared/utils/const';
import './AuthForm.css';

type AuthFormType = {
    type: 'auth' | 'register';
    isReg: boolean;
};

type FormConfig = {
    title: string,
    btnText: string,
    linkText: string,
    linkTo: string,
    path: string
};

export function AuthForm({ type, isReg } : AuthFormType) {
    let formConfig: FormConfig = {
        title: '',
        btnText: '',
        linkText: '',
        linkTo: '',
        path: REGISTRATION_ROUTE
    };
    
    let formPath = isReg ? REGISTRATION_ROUTE : LOGIN_ROUTE;

    if (type === 'register') {
        formConfig = {
            title: 'Регистрация',
            btnText: 'Зарегистрироваться',
            linkText: 'Уже зарегистрированы?',
            linkTo: 'Войти',
            path: formPath
        }
    }

    if (type === 'auth') {
        formConfig = {
            title: 'Авторизация',
            btnText: 'Войти',
            linkText: 'Еще не зарегистрированы?',
            linkTo: 'Регистрация',
            path: formPath
        }
    }

    console.log('formPath', formPath);

    return (
        <div className="auth-form">
            <h2 className="auth-form__form-title">{formConfig.title}</h2>
            <form className="auth-form__form">
                <input type="text" className="auth-form__input" name="email"/>
                <input type="text" className="auth-form__input" name="password"/>
                <button className="auth-form__submit-btn">{formConfig.btnText}</button>
                <p className="auth-form__another-form-link">{formConfig.linkText}<br/>
                    <Link to={formConfig.path}>{formConfig.linkTo}</Link>
                </p>
            </form>
        </div>
    )
}