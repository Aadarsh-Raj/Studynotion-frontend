import { createContext, useContext, useEffect, useState } from "react";
const StoreController = createContext({});

export const StroreFunction = () => {
  return useContext(StoreController);
};

const StoreContext = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("studynotiontoken") || null
  );
  const [userName, setUserName] = useState("User");
  // const [apiUrl, setApiUrl] = useState("http://localhost:4000/api");
  const [apiUrl, setApiUrl] = useState(
  "https://studynotion-backend-95vw.onrender.com/api"
  );
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
  const [updateBoxDisplay, setUpdateBoxDisplay] = useState(false);
  const [loader, setLoader] = useState(false);
  const [updateBoxTag, setUpdateBoxTag] = useState("name");
  const [updateInputValue, setUpdateInputValue] = useState("");
  const [ownCourse, setOwnCourse] = useState([]);
  const [courseEditDisplay, setCourseEditDisplay] = useState(true);
  const [editCourseId, setEditCourseId] = useState("");
  const [editCourseTutor, setEditCourseTutor] = useState("");

  useEffect(() => {
    if (token) {
      localStorage.setItem("studynotiontoken", token);
      fetchOwnProfile();
    } else {
      localStorage.removeItem("studynotiontoken");
      setUser(null);
    }
  }, [token]);

  const fetchOwnProfile = async () => {
    try {
      const response = await fetch(`${apiUrl}/user/myprofile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data)
      setUser(data.result);
    } catch (error) {}
  };
  const fetchAllCourses = async () => {
    setLoader(true);
    try {
      const response = await fetch(`${apiUrl}/course/courses`, {
        method: "GET",
      });
      const data = await response.json();
      setOwnCourse(data.result);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const findUserName = async (userid) => {
    try {
      const response = await fetch(`${apiUrl}/user/findname/${userid}`, {
        method: "GET",
      });
      const data = await response.json();
      if (data.success) {
        return data.result;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const functionObject = {
    apiUrl,
    token,
    setToken,
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
    loader,
    setLoader,
    updateBoxDisplay,
    setUpdateBoxDisplay,
    updateBoxTag,
    setUpdateBoxTag,
    updateInputValue,
    setUpdateInputValue,
    fetchOwnProfile,
    fetchAllCourses,
    ownCourse,
    findUserName,
    courseEditDisplay,
    setCourseEditDisplay,
    editCourseId,
    setEditCourseId,
    editCourseTutor,
    setEditCourseTutor,
  };
  return (
    <StoreController.Provider value={functionObject}>
      {props.children}
    </StoreController.Provider>
  );
};

export default StoreContext;
