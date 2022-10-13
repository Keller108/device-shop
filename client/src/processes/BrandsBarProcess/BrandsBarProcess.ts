import { BrandsBarStore } from "../../features/BrandsBar/store/BrandsBarStore";

export class BrandsBarProcess {
    brandsBarStore: BrandsBarStore;
    
    constructor() {
        this.brandsBarStore = new BrandsBarStore();
    }
}