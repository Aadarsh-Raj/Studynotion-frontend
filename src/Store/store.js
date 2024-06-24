import { createContext, useContext, useEffect, useState } from "react";

const StoreController = createContext({});

export const StroreFunction = () => {
  return useContext(StoreController);
};

const StoreContext = (props) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [userName, setUserName] = useState("User");
    const [apiUrl, setApiUrl] = useState("http://localhost:4000/api");
    const [dialogAppear, setDialogAppear] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("Welcome");
    const [dialogError, setDialogError] = useState(false);
    useEffect(()=>{
      localStorage.setItem("studynotion", token)
    },[token])
  const functionObject = {
    apiUrl,
    token,
    userName,
    setUser,
    setToken,
    setUserName,
    dialogAppear,
    setDialogAppear,
    dialogMessage,
    setDialogMessage,
    dialogError,
    setDialogError
  };
  return (
    <StoreController.Provider value={functionObject}>
      {props.children}
    </StoreController.Provider>
  );
};

export default StoreContext;
