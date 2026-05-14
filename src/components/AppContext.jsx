import { createContext, useState } from "react";
const AppContext = createContext();

const AppContextProvider = (props) => {
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currentPlaylist,
        setCurrentPlaylist,
        isLoggedIn,
        setIsLoggedIn,
        isDarkMode,
        setIsDarkMode
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
