import { TypesBarStore } from "../../features/TypeBar/store/TypesBarStore";

export class TypesBarProcess {
    typesBarStore: TypesBarStore;
    
    constructor() {
        this.typesBarStore = new TypesBarStore();
    }
}