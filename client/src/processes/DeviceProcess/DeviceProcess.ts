import DeviceStore from "../../entities/Device/store/DeviceStore";

export class DeviceProcess {
    deviceStore: DeviceStore;
    
    constructor() {
        this.deviceStore = new DeviceStore();
    }
}