import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="background-image fixed-bg"></div>
            <div>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <p className="logo">
                    CR<span>O</span>W
                </p>
            </div>
        </>
    );
}

export default App;
