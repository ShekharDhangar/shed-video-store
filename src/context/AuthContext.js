import { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  useLocalStorageSetItem,
} from "../hooks/customHooks";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const [userState, setUserState] = useState({ id: "" });
  async function logInUser(email, password, setState) {
    try {
      setState(true);
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      const encodedToken = response.data.encodedToken;
      if (response) {
        useLocalStorageSetItem("user-token", encodedToken);
        setState(false);
        setUserState({ ...userState, id: encodedToken });
      }
    } catch (error) {
      setState(false);
      console.log(error);
    }
  }
  const guestLogin = async () => {
    try {
      const loginResponse = await axios.post("/api/auth/login", {
        email: "shekhardhangar@yahoo.com",
        password: "shekhar",
      });
      const encodedToken = loginResponse.data.encodedToken;
      if (loginResponse) {
        setUserState({ ...userState, id: encodedToken });
      }

      useLocalStorageSetItem("user-token", encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  async function signUpUser(firstName, lastName, email, password, setState) {
    try {
      setState(true);
      const response = await axios.post("/api/auth/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      const encodedToken = response.data.encodedToken;

      if (response) {
        setState(false);
        setUserState({ ...userState, id: encodedToken });
        useLocalStorageSetItem("user-token", encodedToken);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function logOutUser() {
    localStorage.clear();
  }

//   Will Add the below feature later.
//   useEffect(() => {
//     (async () => {
//       try {
//         if (userToken) {
//           const response = await axios.post("/api/auth/verify", {
//             encodedToken: userToken,
//           });
//           const encodedToken = response.data.encodedToken;
//           if (response) {
//             setUserState({ ...userState, id: userToken });
//           }
//         }
//       } catch (error) {}
//     })();
//   }, []);

  return (
    <AuthContext.Provider
      value={{ logInUser, logOutUser, signUpUser, userState, guestLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
