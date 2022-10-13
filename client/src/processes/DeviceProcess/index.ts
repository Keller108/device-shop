import { createContext } from "react";
import { DeviceProcess } from "./DeviceProcess";

export const deviceContext = createContext(new DeviceProcess());