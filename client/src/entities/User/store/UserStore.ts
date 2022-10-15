import { makeAutoObservable, observable, action, computed } from "mobx";

export default class UserStore {
    _isAuth: boolean;
    _user: {};

    constructor() {
        this._isAuth = false;
        this._user = {};

        makeAutoObservable(this, {
            _isAuth: observable,
            _user: observable,
            setIsAuth: action,
            setUset: action,
            isAuth: computed,
            user: computed
        });
    }

    setIsAuth(value: boolean) {
        this._isAuth = value;
    }

    setUset(user: {}) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}