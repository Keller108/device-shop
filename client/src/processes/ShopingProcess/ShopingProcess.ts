import DeviceStore from "../../entities/Device/store/DeviceStore";
import { BrandsBarStore } from "../../features/BrandsBar/store/BrandsBarStore";
import { TypesBarStore } from "../../features/TypeBar/store/TypesBarStore";

export class ShopingProcess {
    typesBarStore: TypesBarStore;
    brandsBarStore: BrandsBarStore;
    deviceStore: DeviceStore;
    
    constructor() {
        this.typesBarStore = new TypesBarStore();
        this.brandsBarStore = new BrandsBarStore();
        this.deviceStore = new DeviceStore();
    }


}