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
    selectedDevice: {} | DeviceEntityType;

    constructor() {
        this.devices = [];
        this.selectedDevice = {};

        makeAutoObservable(this, {
            devices: observable,
            selectedDevice: observable,
            getDevices: action,
            setSelectedDevice: action
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

    private fetchOneDevice(deviceId: number) {
        return fetch(`${DEVICES_URL}/${deviceId}`, {
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

    public getOneDevice(deviceId: number) {
        this.fetchOneDevice(deviceId).then(res => this.selectedDevice = res);
    }

    public setSelectedDevice(device: DeviceEntityType) {
        this.selectedDevice = device;
    }
}