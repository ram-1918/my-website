import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from './components/Profile';
import Feedbacks from './components/Feedbacks';
import NoPage from './components/NoPage';
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";

// PYTHON: 16252081514; GOLANG: 715121147

const MainRoutes = () => {
    // const type = localStorage.getItem("v")
    // console.log('Main Routes Changed', type, "Go: ", type==="2", "python: ", type==="1");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute />}>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<NoPage />} />
                <Route path="admin" element={<Feedbacks />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoutes;

// https://www.ramchandra.info/portfolio/python/
// https://www.ramchandra.info/portfolio/python