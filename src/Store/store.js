import { createContext, useContext, useEffect, useState } from "react";

const StoreController = createContext({});

export const StroreFunction = () => {
  return useContext(StoreController);
};

const StoreContext = (props) => {
  const [user, setUser] = useState(false);
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState("User");
  const [apiUrl, setApiUrl] = useState("http://localhost:4000/api");
  const [dialogAppear, setDialogAppear] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("Welcome");
  const [dialogError, setDialogError] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addCourse1, setAddCourse1] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addLearning, setAddLearning] = useState("");
  const [addInstructorName, setAddInstructorName] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseImage, setCourseImage] = useState([]);
  const [courseImagPreview, setCourseImagePreview] = useState([]);


  useEffect(() => {
    if (localStorage.getItem("studynotion")) {
      setUser(true);
        setToken(localStorage.getItem("studynotion"));
    }
    if(token){
      fetchOwnProfile();
    }

  }, [token]);


  const fetchOwnProfile = async ()=>{
    try {
      const response = await fetch(`${apiUrl}/user/myprofile`,{
        method: "GET",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });
      const data = await response.json();
      setUser(data.result);
    } catch (error) {
      
    }
  }
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
    setDialogError,
    user,
    sidebarOpen,
    setSidebarOpen,
    addCourse1,
    setAddCourse1,
    addDescription,
    setAddDescription,
    addLearning,
    setAddLearning,
    addInstructorName,
    setAddInstructorName,
    coursePrice,
    setCoursePrice,
    courseImage,
    setCourseImage,
    courseImagPreview,
    setCourseImagePreview,
  };
  return (
    <StoreController.Provider value={functionObject}>
      {props.children}
    </StoreController.Provider>
  );
};

export default StoreContext;
