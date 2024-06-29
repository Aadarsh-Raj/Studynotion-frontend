import { Route, Routes } from "react-router-dom";
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
function App() {
  return (
    <>
      <main className="main">
        <Header />
        <Sidebar />
        <Popup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/owncourses/:usertoken" element={<TutorCourseList />} />
          <Route path="/addcourse/:usertoken" element={<AddCourse />} />
          <Route path={"/profile/:usertoken"} element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

// user --> student, instructor --> name, email, phone number, password, type, active, gender, dob, about
// courses(name, courseDescription, Instructor, whatYou will learn, courseContent, rating and reviews([user, rating, review]), price, thumnail,studentsEnrolled, active)
// courseProgress -->
//  invoices -> users, courseName, price, address, princode, courseId
