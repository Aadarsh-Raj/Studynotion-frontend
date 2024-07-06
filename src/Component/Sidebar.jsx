import React from "react";
import "./Style/sidebar.css";
import { StroreFunction } from "../Store/store";
import { TbBookFilled } from "react-icons/tb";
import { IoIosAddCircle } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  const {
    sidebarOpen,
    token,
    apiUrl,
    setToken,
    setDialogMessage,
    setDialogError,
    setDialogAppear,
    setSidebarOpen,
    setLoader,
    user
    
  } = StroreFunction();
  const navigate = useNavigate();
  const logoutUser = async () => {
    setToken("");
    setLoader(true);
    setToken(null)
    localStorage.removeItem("studynotion");
    try {
      const response = await fetch(`${apiUrl}/user/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setLoader(false)
      if (data.success) {
        navigate("/login");
        setDialogMessage(data.message);
        setDialogError(false);
        setDialogAppear(true);
      } else {
        setDialogMessage(data.message);
        setDialogError(true);
        setDialogAppear(true);
      }
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Please try again later.");
      setDialogAppear(true);
    }
  };
  return (
    <>
      {token && (
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`} onClick={()=>setSidebarOpen(false)}>
          <Link to={`/profile/${token}`}>
            <li>
              <FaUserEdit />
              My Profile
            </li>
          </Link>
          <Link to={`/owncourses/${token}`}>
            <li>
              <TbBookFilled />Your Courses
            </li>
          </Link>
          {user.userRole === "instructor" && <Link to={`/addcourse/${token}`}>
            <li>
              <IoIosAddCircle /> Add Courses
            </li>
          </Link>}
          <li onClick={logoutUser}>
            <IoLogOut /> Log Out
          </li>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
