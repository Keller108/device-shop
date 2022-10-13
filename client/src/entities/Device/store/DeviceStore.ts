import { makeAutoObservable, observable, action, computed } from "mobx";
import { handleResponse } from "../../../shared/utils/handleResponse";
import { DEVICES_URL } from "../../../shared/utils/routes";

export type DefaultEntityType = {
    id: number;
    name: string;
}

export interface DeviceEntityType extends DefaultEntityType {
    price: number;
    rating: number;
    img: string;
}

export default class DeviceStore {
    // types: DefaultEntityType[];
    // brands: DefaultEntityType[];
    devices: DeviceEntityType[] | [];
    selectedType: {} | DefaultEntityType;

    constructor() {
        // this.types = [];
        // this.brands = [
        //     { id: 1, name: "Samsung" },
        //     { id: 2, name: "Apple" }
        // ];
        this.devices = [];
        this.selectedType = {};

        makeAutoObservable(this, {
            devices: observable,
            // getDevices: action
        });
    }

    // setTypes(types: DefaultEntityType[]) {
    //     this.types = types;
    // }

    // private fetchDevices() {
    //     return fetch(DEVICES_URL, {
    //         method: "GET",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //     }).then(handleResponse).catch(err => console.log(err));
    // }

    // public getDevices() {
    //     this.fetchDevices().then(res => this.devices = res);
    // }

    // setBrands(brands: DefaultEntityType[]) {
    //     this.brands = brands;
    // }

    // setDevices(devices: DeviceEntityType[]) {
    //     this.devices = devices;
    // }

    // get types() {
    //     return this._types;
    // }

    // get brands() {
    //     return this._brands;
    // }

    // get devices() {
    //     return this._devices;
    // }

    // get selectedType() {
    //     return this._selectedType;
    // }
}