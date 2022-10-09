import { BrowserRouter } from "react-router-dom";
import './App.css';
import { AppRouter } from "./AppRouter";

export function App() {
    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
}
