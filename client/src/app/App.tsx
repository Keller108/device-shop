import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../shared/Navbar";
import './App.css';
import { AppRouter } from "./AppRouter";

export function App() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    );
}
