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

    public createType(type: string) {
        return fetch(TYPES_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify(type)
        }).then(res => {
            console.log(`Тип ${type} успешно создан`);
            this.update();
        })
        .catch(err => console.log(`Ошибка при создании:`, err.message));
    }

    private update() {
        return this.fetchTypes();
    }
}