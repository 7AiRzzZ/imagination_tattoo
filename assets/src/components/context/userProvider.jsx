import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: window.user.id,
    email: window.user.email,
    roles: window.user.roles,
    password: window.user.password,
    favoris: window.user.favoris,
  });

  const [isFavorite, setIsFavorite] = useState(false);
  const [totalFavoris, setTotalFavoris] = useState([]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        totalFavoris,
        setTotalFavoris,
        isFavorite,
        setIsFavorite,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
