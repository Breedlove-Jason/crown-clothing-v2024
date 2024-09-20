import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils.js";

// actual value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const fetchUser = async () => {
      const unsubscribe = onAuthStateChangedListener(async (user) => {
        if (user) {
          await createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });
      return () => {
        unsubscribe();
      };
    };

    fetchUser().catch(console.error);
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
