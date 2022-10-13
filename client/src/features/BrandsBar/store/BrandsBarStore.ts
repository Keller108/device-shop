import { action, makeAutoObservable, observable } from "mobx";
import { DefaultEntityType, DeviceEntityType } from "../../../entities/Device/store/DeviceStore";
import { handleResponse } from "../../../shared/utils/handleResponse";
import { BRANDS_URL } from "../../../shared/utils/routes";

export class BrandsBarStore {
    brands: [] | DeviceEntityType[];
    selectedBrand: {} | DefaultEntityType;

    constructor() {
        this.brands = [];
        this.selectedBrand = {};

        makeAutoObservable(this, {
            brands: observable,
            selectedBrand: observable,
            fetchBrands: action,
            setSelectedBrand: action
        })
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

    public setSelectedBrand(brand: DefaultEntityType) {
        this.selectedBrand = brand;
    }
}