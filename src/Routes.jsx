import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "./pages/AuthenticationPage/AuthRoutes/require-auth";
import { RestrictAuth } from "./pages/AuthenticationPage/AuthRoutes/restrict-auth";
import { AuthLogin, AuthSignUp, History, HomePage, Playlist, VideoListing, WatchLater } from "./pages/pages";

function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<VideoListing />} />

      <Route element={<RestrictAuth />}>
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/signup" element={<AuthSignUp />} />
      </Route>

      <Route element={<RequireAuth />}>
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/history" element={<History />} />
        <Route path="/watchLater" element={<WatchLater />} />
      </Route>
    </Routes>
  );
}

export { RoutesPath };
