import { createContext } from "react";
import { BrandsBarProcess } from "./BrandsBarProcess";

export const brandsBarContext = createContext(new BrandsBarProcess());