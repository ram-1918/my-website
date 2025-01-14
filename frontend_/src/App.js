import { useParams } from "react-router-dom";
import MainRoutes from "./MainRoutes";

function App(){
  console.log("Location", window.location.origin);
  return (
    <MainRoutes />
  )
};

export default App;