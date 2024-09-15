import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Popup from "./Component/Popup";
import Sidebar from "./Component/Sidebar";
import AddCourse from "./Component/AddCourse";
import Profile from "./Component/Profile";
import TutorCourseList from "./Component/TutorCourseList";
import Catalog from "./Component/Catalog";
import { StroreFunction } from "./Store/store";
import Loader from "./Component/Loader";
import Footer from "./Component/Footer";
import ErrorComponent from "./Component/ErrorComponent";
import CourseEditContainer from "./Component/CourseEditContainer";
import StudentCourseList from "./Component/StudentCourseList";

function App() {
  const { token, loader, courseEditDisplay, editCourseTutor, user } =
    StroreFunction();
  return (
    <>
      <main className="main">
        <Header />
        <Sidebar />
        {courseEditDisplay && editCourseTutor === user?.userId && (
          <CourseEditContainer />
        )}
        {loader && <Loader />}
        <Popup />
      
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Navigate to="/" />} />
              <Route path="/login" element={<Navigate to="/" />} />
              <Route
                path="/owncourses/:usertoken"
                element={
                  user?.userRole === "instructor" ? (
                    <TutorCourseList />
                  ) : (
                    <StudentCourseList />
                  )
                }
              />
              <Route path="/addcourse/:usertoken" element={<AddCourse />} />
              <Route path={"/profile/:usertoken"} element={<Profile />} />
              <Route
                path="/*"
                errorElement={<ErrorComponent />}
                element={<ErrorComponent />}
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/owncourses/:usertoken"
                element={<Navigate to="/login" />}
              />
              <Route
                path="/addcourse/:usertoken"
                element={<Navigate to="/login" />}
              />
              <Route
                path={"/profile/:usertoken"}
                element={<Navigate to="/login" />}
              />
              <Route
                path="/*"
                errorElement={<ErrorComponent />}
                element={<ErrorComponent />}
              />
            </>
          )}
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;

