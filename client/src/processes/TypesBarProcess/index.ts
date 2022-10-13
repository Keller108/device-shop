import { createContext } from "react";
import { TypesBarProcess } from "./TypesBarProcess";

export const typesBarContext = createContext(new TypesBarProcess());