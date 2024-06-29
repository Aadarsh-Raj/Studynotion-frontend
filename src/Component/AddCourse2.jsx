import React, { useEffect } from "react";
import { StroreFunction } from "../Store/store";

const AddCourse2 = () => {
  const {
    addInstructorName,
    setAddInstructorName,
    coursePrice,
    setCoursePrice,
    courseImage,
    setCourseImage,
    courseImagPreview,
    user,
    setCourseImagePreview,
  } = StroreFunction();
  async function uploadImages(e) {
    const files = Array.from(e.target.files);
    setCourseImage(files);
    const fileReaders = files.map((file) => {
      const fileReader = new FileReader();
      fileReader.onload = ()=>{
        setCourseImagePreview((prevState) => [...prevState, fileReader.result]);
      }
      fileReader.readAsDataURL(file);
      return fileReader;
    });
    await Promise.all(fileReaders);

  }
  useEffect(() => {
  }, [courseImagPreview]);
  return (
    <>
      <div className="addcourse-2">
        <form className="signup-form contact-form">
          <h1>Add Course</h1>

          <div className="email-box form-box-item">
            <label htmlFor="" className="required-label">Instructor name</label>{" "}
            <input
              type="text"
              disabled
              placeholder={user.userName}
              onChange={(e) => setAddInstructorName(e.target.value)}
            />
          </div>
          <div className="email-box form-box-item">
            <label htmlFor="" className="required-label">Price</label>{" "}
            <input
              type="number"
              value={coursePrice}
              min={0}
              placeholder="Enter course price"
              onChange={(e) => {
                setCoursePrice(e.target.value);
              }}
            />
          </div>

          <div className="email-box form-box-item">
            <label htmlFor="" className="required-label">Thumbnail</label>{" "}
            <input
              type="file"
              placeholder="Add thumnail"
              multiple
              required
              name="files[]"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => uploadImages(e)}
            />
          </div>
        </form>
        <div className="imgae-preview-container">
          {courseImagPreview.length > 0 && (
            <>
              {courseImagPreview.map((ele, index) => (
                <img
                  src={ele}
                  alt=""
                  key={Math.floor(Math.random() * 1000) + ele}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AddCourse2;
