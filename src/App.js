import { useEffect } from "react";
import "./App.css";
import { RoutesPath } from "./Routes";
import { getVideos } from "./serverCalls/getVideos";
import {useVideoContext} from "./context/videoContext";

function App() {
  const {dispatch} = useVideoContext();
  useEffect(() => {
    (async () => {
      try {
        const response = await getVideos();
        if (response) {
          dispatch({
            type: "LOAD VIDEOS",
            payload: response,
          });
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
