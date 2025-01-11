import { useParams } from "react-router-dom";
import MainRoutes from "./MainRoutes";

function App(){
  const {type} = useParams();
  return (
    <MainRoutes />
  )
};

export default App;