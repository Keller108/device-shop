import { createContext } from "react";
import { UserProcess } from "./UserProcess";

export const userContext = createContext(new UserProcess());