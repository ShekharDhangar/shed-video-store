import { useEffect } from "react";
import "./App.css";
import { RoutesPath } from "./Routes";
import { getVideos,getCategories } from "./serverCalls/initialCalls";
import {useVideoContext} from "./context/videoContext";

function App() {
  const {dispatch} = useVideoContext();
  useEffect(() => {
    (async () => {
      try {
        const videoResponse = await getVideos();
        if (videoResponse) {
          dispatch({
            type: "LOAD_VIDEOS",
            payload: videoResponse,
          });
        }
        const categoryResponse = await getCategories();
        if(categoryResponse){
          dispatch({
            type:"SET_CATEGORIES",
            payload:categoryResponse,
          })
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <RoutesPath />
    </div>
  );
}

export default App;
