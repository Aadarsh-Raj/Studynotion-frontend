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
import { StroreFunction } from "./Store/store";
import Loader from "./Component/Loader";
import Footer from "./Component/Footer";
function App() {
  const { token, loader } = StroreFunction();
  return (
    <>
      <main className="main">
        <Header />
        <Sidebar />
        {loader && <Loader />}
        <Popup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Login />} />
          {token && (
            <>
              <Route
                path="/owncourses/:usertoken"
                element={<TutorCourseList />}
              />
              <Route path="/addcourse/:usertoken" element={<AddCourse />} />
              <Route path={"/profile/:usertoken"} element={<Profile />} />
            </>
          )}
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;


//  invoices -> users, courseName, price, address, princode, courseId
// 