import { useEffect } from "react";
import MainRoutes from "./MainRoutes";
import axios from "axios";
import { atom, useRecoilState } from "recoil";

export const totalViewsAtom = atom({
  key: "setTotalView",
  default: 0,
});

const API_URL = "https://my-website-crbf.onrender.com";
// const API_URL = "http://127.0.0.1:5001";

const generateUniqueId = () => `user-${Math.random().toString(36).slice(2)}`;

function App() {
  const [, setTotalViews] = useRecoilState(totalViewsAtom);

  // geenrate unique id + makes api call to track view + get total views
  useEffect(() => {
    let userId = localStorage.getItem("userId");
    // console.log('UserID', userId);
    if (userId === null) {
      userId = generateUniqueId();
      localStorage.setItem("userId", userId);
    }
    axios
      .post(`${API_URL}/track-view`, { userId: userId })
      .then(() => console.log("View tracked!"))
      .catch(() => console.log("Error occured!"));

    axios
      .get(`${API_URL}/total-views`)
      .then((resp) => {
        setTotalViews(resp.data.totalViews);
      })
      .catch(() => console.log("Error occured!"));
  }, [setTotalViews]);

  return <MainRoutes />;
}

export default App;
