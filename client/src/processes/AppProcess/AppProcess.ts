import { AppStore } from "../../app/store/AppStore";

export class AppProcess {
    appStore: AppStore;

    constructor() {
        this.appStore = new AppStore();
    }
}