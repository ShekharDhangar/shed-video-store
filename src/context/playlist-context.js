// import {
//     createContext,
//     useContext,
//     useState,
//     useEffect,
//   } from "react";
// import { useLocalStorageGetItem } from "../hooks/customHooks";
//   import { getPlaylists } from "../serverCalls/likeCalls";
//   const PlaylistsContext = createContext();
//   function PlaylistsProvider({ children }) {
//     const [Playlists, setPlaylists] = useState([]);
//     const userToken=useLocalStorageGetItem("shed-video-token");
  
//     useEffect(() => {
//       (async () => {
//         try {
//           if (userToken) {
//             const PlaylistsResponse = await getPlaylists(userToken);
//             if (PlaylistsResponse) {
//               setPlaylists(PlaylistsResponse.data.playlists);
//             }
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       })();
//     }, []);
  
//     return (
//       <PlaylistsContext.Provider value={{Playlists,setPlaylists}}>
//         {children}
//       </PlaylistsContext.Provider>
//     );
//   }
  
//   const usePlaylistsContext = () => useContext(PlaylistsContext);
//   export { PlaylistsProvider, usePlaylistsContext };
  