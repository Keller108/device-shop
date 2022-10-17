import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../processes/UserProcess';
import { REGISTRATION_ROUTE, SHOP_ROUTE } from '../../shared/utils/routes';
import { register, signIn } from './api/auth';
import './AuthForm.css';
import { authConfig, FormConfig, registerConfig } from './const/authConfig';

type AuthFormType = {
    type: string;
};

export const AuthForm = observer(({ type } : AuthFormType) => {
    const { userStore } = useContext(userContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    let formConfig: FormConfig = {
        title: '',
        btnText: '',
        linkText: '',
        linkTo: '',
        path: REGISTRATION_ROUTE
    };

    if (type === 'register') {
        formConfig = registerConfig;
    }

    if (type === 'auth') {
        formConfig = authConfig;
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
        type === 'register' ? register(email, password)
            .then((res) => {
                if (res.token) {
                    localStorage.setItem('jwt', res.token);
                    userStore.setIsAuth(true);
                    navigate(SHOP_ROUTE);
                    userStore.setUser(res.user);
                    console.log('user', toJS(userStore.user));
                    // tokenCheck();
                }            
            }).catch(err => console.log(err))
                : signIn(email, password)
                    .then((res) => {
                        if (res.token) {
                            localStorage.setItem('jwt', res.token);
                            userStore.setIsAuth(true);
                            navigate(SHOP_ROUTE);
                            userStore.setUser(res.user);
                            console.log('user', toJS(userStore.user));
                            // tokenCheck();
                        }            
                    }).catch(err => console.log(err))
    }

    return (
        <div className="auth-form">
            <h2 className="auth-form__form-title">{formConfig.title}</h2>
            <form onSubmit={handleSunbmitForm}className="auth-form__form">
                <input type="text" className="auth-form__input" name="shop-email" onChange={onEmailInputChange} value={email}/>
                <input type="password" className="auth-form__input" name="shop-password" onChange={onPasswordInputChange} value={password}/>
                <button type="submit" className="auth-form__submit-btn">{formConfig.btnText}</button>
                <p className="auth-form__another-form-link">{formConfig.linkText}<br/>
                    <Link to={formConfig.path}>{formConfig.linkTo}</Link>
                </p>
            </form>
        </div>
    )
});