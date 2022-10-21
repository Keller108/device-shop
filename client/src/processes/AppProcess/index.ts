import { createContext } from "react";
import { AppProcess } from "./AppProcess";

export const appContext = createContext(new AppProcess());