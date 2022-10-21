import { action, makeObservable, observable } from "mobx";

export class AppStore {
    modalIsOpen: boolean;

    constructor() {
        this.modalIsOpen = false;

        makeObservable(this, {
            modalIsOpen: observable,
            openModal: action,
            closeModal: action
        })
    }

    openModal() {
        this.modalIsOpen = true;
    }

    closeModal() {
        this.modalIsOpen = false;
    }
}