import { FormEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../shared/utils/routes';
import { register } from './api/auth';
import './AuthForm.css';

type AuthFormType = {
    type: string;
};

type FormConfig = {
    title: string,
    btnText: string,
    linkText: string,
    linkTo: string,
    path: string
};

export function AuthForm({ type } : AuthFormType) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let formConfig: FormConfig = {
        title: '',
        btnText: '',
        linkText: '',
        linkTo: '',
        path: REGISTRATION_ROUTE
    };

    if (type === 'register') {
        formConfig = {
            title: 'Регистрация',
            btnText: 'Зарегистрироваться',
            linkText: 'Уже зарегистрированы?',
            linkTo: 'Войти',
            path: LOGIN_ROUTE
        }
    }

    if (type === 'auth') {
        formConfig = {
            title: 'Авторизация',
            btnText: 'Войти',
            linkText: 'Еще не зарегистрированы?',
            linkTo: 'Регистрация',
            path: REGISTRATION_ROUTE
        }
    }

    const onEmailInputChange = (evt: any) => {
        let value = evt.target.value;
        setEmail(value);
    };

    const onPasswordInputChange = (evt: any) => {
        let value = evt.target.value;
        setPassword(value);
    };

    const handleSunbmitForm = (e: any) => {
        e.preventDefault();
        register(email, password)
            .then(res => console.log('res', res));
    }

    return (
        <div className="auth-form">
            <h2 className="auth-form__form-title">{formConfig.title}</h2>
            <form onSubmit={handleSunbmitForm}className="auth-form__form">
                <input type="text" className="auth-form__input" name="email" onChange={onEmailInputChange} value={email}/>
                <input type="password" className="auth-form__input" name="password" onChange={onPasswordInputChange} value={password}/>
                <button type="submit" className="auth-form__submit-btn">{formConfig.btnText}</button>
                <p className="auth-form__another-form-link">{formConfig.linkText}<br/>
                    <Link to={formConfig.path}>{formConfig.linkTo}</Link>
                </p>
            </form>
        </div>
    )
}