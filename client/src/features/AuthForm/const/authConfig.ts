import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../../shared/utils/routes";

export type FormConfig = {
    title: string,
    btnText: string,
    linkText: string,
    linkTo: string,
    path: string
};

export const formConfig: FormConfig = {
    title: '',
    btnText: '',
    linkText: '',
    linkTo: '',
    path: REGISTRATION_ROUTE
};

export const authConfig = {
    title: 'Авторизация',
    btnText: 'Войти',
    linkText: 'Еще не зарегистрированы?',
    linkTo: 'Регистрация',
    path: REGISTRATION_ROUTE
};

export const registerConfig = {
    title: 'Регистрация',
    btnText: 'Зарегистрироваться',
    linkText: 'Уже зарегистрированы?',
    linkTo: 'Войти',
    path: LOGIN_ROUTE
};