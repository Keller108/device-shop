import { makeAutoObservable, observable, action } from "mobx";
import { UserModel } from "../model/UserModel";

export default class UserStore {
    isAuth: boolean;
    user: UserModel | {};

    constructor() {
        this.isAuth = false;
        this.user = {};

        makeAutoObservable(this, {
            isAuth: observable,
            user: observable,
            setIsAuth: action,
            setUser: action,
        });
    }

    public setIsAuth(value: boolean) {
        this.isAuth = value;
    }

    public setUser(user: {}) {
        this.user = user;
    }
}