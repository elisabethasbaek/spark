import { Router } from "@reach/router";
import Home from "./Pages/Home";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Home default />
            </Router>
        </div>
    );
};
