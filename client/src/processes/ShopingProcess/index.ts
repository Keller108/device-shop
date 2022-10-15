import { createContext } from "react";
import { ShopingProcess } from "./ShopingProcess";

export const shopingContext = createContext(new ShopingProcess());