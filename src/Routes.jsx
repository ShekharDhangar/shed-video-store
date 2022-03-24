import { Routes, Route } from "react-router-dom";
import { HomePage, VideoListing } from "./pages/pages";

function RoutesPath(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<VideoListing />} />
        </Routes>
    )
}

export {RoutesPath}

