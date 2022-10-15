import { makeAutoObservable, observable, action } from "mobx";
import { handleResponse } from "../../../shared/utils/handleResponse";
import { DEVICES_URL } from "../../../shared/utils/routes";

export type DefaultEntityType = {
    id: number;
    name: string;
}

export interface DeviceEntityType extends DefaultEntityType {
    price: number;
    rating?: number;
    img: string;
}

export default class DeviceStore {
    devices: DeviceEntityType[] | [];
    selectedType: {} | DefaultEntityType;

    constructor() {
        this.devices = [];
        this.selectedType = {};

        makeAutoObservable(this, {
            devices: observable,
            getDevices: action
        });
    }

    private fetchDevices(typeId?: number, brandId?: number) {
        let query;
        if (typeId && brandId) {
            query = `?typeId=${typeId}&brandId=${brandId}`;
        }
        if (!typeId && brandId) {
            query = `?brandId=${brandId}`;
        }
        if (typeId && !brandId) {
            query = `?typeId=${typeId}`;
        }
        if (!typeId && !brandId) {
            query = '';
        }

        // console.log('query', query);

        return fetch(`${DEVICES_URL}${query}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(handleResponse).catch(err => console.log(err));
    }

    public getDevices(typeId?: number, brandId?: number) {
        this.fetchDevices(typeId, brandId).then(res => this.devices = res.rows);
    }
}