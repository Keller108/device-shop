import { action, makeAutoObservable, observable } from "mobx";
import { DeviceEntityType } from "../../../entities/Device/store/DeviceStore";
import { handleResponse } from "../../../shared/utils/handleResponse";
import { BRANDS_URL } from "../../../shared/utils/routes";

export class BrandsBarStore {
    brands: [] | DeviceEntityType[];

    constructor() {
        this.brands = [];

        makeAutoObservable(this, {
            brands: observable,
            fetchBrands: action
        });
    }

    private getBrands() {
        return fetch(BRANDS_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(handleResponse);
    }

    public fetchBrands() {
        this.getBrands().then(res => this.brands = res);
    }
}