import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");
        // Sign-out successful.
      })
      .catch((err) => {
        // An error happened.
        console.log(err.message);
      });
  };

  return { logout };
};
