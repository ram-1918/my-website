import { Outlet, useSearchParams } from "react-router-dom"
import NoPage from "./components/NoPage";

const ProtectedRoute = () => {
    return <Outlet />;
    
    // const [searchParams, setSearchParams] = useSearchParams();
    // const type = searchParams.get('v');
    // const savedType = localStorage.getItem("v");
    // console.log("protected routes", type, savedType);
    // if(savedType) {
    //     if (type !== savedType || (type !== "1" && type !== "2")) {
    //         console.log("No type or saved type found");
    //         return <NoPage />;
    //     } else {
    //         return <Outlet />;
    //     }
    // } else {
    //     console.log("No saved type", type, type==="2");
    //     if(type === "1" || type === "2") {
    //         localStorage.setItem("v", type);
    //         console.log("Type is set in localstorage");
    //         return <Outlet />;
    //     } else {
    //         return <NoPage />
    //     }
    // }

    // if(!savedType && (type === "python" || type === "go")) {
    //     localStorage.setItem("type", type);
    //     console.log("Type is set in localstorage")
    // }
    // if ((type !== "python" && type !== "go") || type !== savedType) {
    //     console.log("No type or saved type found")
    //     return <NoPage />;
    // }

    // return <Outlet />;
};

export default ProtectedRoute;