import { action, makeAutoObservable, observable } from "mobx";
import { DefaultEntityType } from "../../../entities/Device/store/DeviceStore";
import { handleResponse } from "../../../shared/utils/handleResponse";
import { TYPES_URL } from "../../../shared/utils/routes";

export class TypesBarStore {
    types: [] | DefaultEntityType[];

    constructor() {
        this.types = [];

        makeAutoObservable(this, {
            types: observable,
            fetchTypes: action
        });
    }

    private getTypes() {
        return fetch(TYPES_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(handleResponse);
    }

    public fetchTypes() {
        this.getTypes().then(res => this.types = res);
    }
}