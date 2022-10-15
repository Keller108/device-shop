import { action, makeAutoObservable, observable } from "mobx";
import { DefaultEntityType } from "../../../entities/Device/store/DeviceStore";
import { handleResponse } from "../../../shared/utils/handleResponse";
import { TYPES_URL } from "../../../shared/utils/routes";

export class TypesBarStore {
    types: DefaultEntityType[] | [];
    selectedType: DefaultEntityType | {};

    constructor() {
        this.types = [];
        this.selectedType = {};

        makeAutoObservable(this, {
            types: observable,
            selectedType: observable,
            fetchTypes: action,
            setSelectedType: action
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

    public setSelectedType(type: DefaultEntityType) {
        this.selectedType = type;
    }
}