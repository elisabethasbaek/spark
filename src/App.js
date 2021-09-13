import { Router } from "@reach/router";
import "./App.scss";
import Home from "./Pages/Home";
import Menu from "./Components/Menu";

export default function App() {
    return (
        <div className="App">
            <Menu />

            <Router>
                <Home default />
            </Router>
        </div>
    );
};
