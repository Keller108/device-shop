import { makeAutoObservable, observable, action } from "mobx";

export default class UserStore {
    isAuth: boolean;
    user: {};

    constructor() {
        this.isAuth = false;
        this.user = {};

        makeAutoObservable(this, {
            isAuth: observable,
            user: observable,
            setIsAuth: action,
            setUset: action,
        });
    }

    setIsAuth(value: boolean) {
        this.isAuth = value;
    }

    setUset(user: {}) {
        this.user = user;
    }
}