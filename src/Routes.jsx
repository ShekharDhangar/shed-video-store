import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/pages";

function RoutesPath(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export {RoutesPath}

