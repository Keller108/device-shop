import UserStore from "../../entities/User/store/UserStore";

export class UserProcess {
    userStore: UserStore;

    constructor() {
        this.userStore = new UserStore();
    }
}