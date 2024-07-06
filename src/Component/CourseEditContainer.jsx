import React from "react";
import "./Style/courseeditcontainer.css";
import { StroreFunction } from "../Store/store";
import { IoMdCloseCircle } from "react-icons/io";

const CourseEditContainer = () => {
  const {
    apiUrl,
    token,
    setUpdateBoxDisplay,
    updateBoxTag,
    setUpdateBoxTag,
    updateInputValue,
    setUpdateInputValue,
    fetchOwnProfile,
    setDialogAppear,
    setDialogMessage,
    setLoader,
    setDialogError,
    setCourseEditDisplay,
    editCourseId,
  } = StroreFunction();
  const updateNormalFields = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        `${apiUrl}/course/update/${editCourseId}?${updateBoxTag}=${updateInputValue}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      await fetchOwnProfile();
      if (data.success) {
        setDialogError(false);
      } else {
        setDialogError(true);
      }
      setLoader(false);
      setUpdateBoxDisplay(false);
      setUpdateInputValue("");
      setUpdateBoxTag("");
      setDialogMessage(data.message);
      setDialogAppear(true);
      setCourseEditDisplay(false);
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Please try again later.");
      setDialogAppear(true);
    }
  };

  const updatePhotos = async () => {
    setLoader(true);
    try {
      const formData = new FormData();
      Array.from(updateInputValue).forEach((file) => {
        formData.append("thumbnail", file);
      });
      const response = await fetch(
        `${apiUrl}/course/update/images/${editCourseId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const data = await response.json();
      await fetchOwnProfile();
      if (data.success) {
        setDialogError(false);
      } else {
        setDialogError(true);
      }
      setLoader(false);
      setUpdateBoxDisplay(false);
      setUpdateInputValue("");
      setDialogMessage(data.message);
      setDialogAppear(true);
      setCourseEditDisplay(false);
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Please try again later.");
      setDialogAppear(true);
    }
  };

  console.log(updateInputValue);
  const updateFor = () => {
    if (updateBoxTag === "thumbnail") {
      updatePhotos();
    } else {
      updateNormalFields();
    }
  };

  return (
    <>
      <div className="course-edit-container">
        <div className="course-edit-container-inner-container">
          <div className="profile-update-container">
            <div
              className="close-btn"
              onClick={() => setCourseEditDisplay(false)}
            >
              <IoMdCloseCircle color="red" />
            </div>

            <div
              style={{
                color: "yellow",
                fontWeight: "bolder",
                textDecoration: "underline",
              }}
            >
              <select
                name=""
                id=""
                onChange={(e) => setUpdateBoxTag(e.target.value)}
              >
                <option value="" selected={false}>
                  No Value Selected
                </option>
                <option value="courseName">Course Name</option>
                <option value="courseDescription">Course Description</option>
                <option value="whatYouWillLearn">What You Will Learn</option>
                <option value="price">Price</option>
                <option value="thumbnail">Images</option>
                <option value="active">Active</option>
                <option value="courseProgress">
                  Course Progress (In %age)
                </option>
                <option value="courseDuration">
                  Course Duration (In Days)
                </option>
              </select>
            </div>
            {updateBoxTag === "thumbnail" && (
              <>
                <p
                  style={{
                    color: "red",
                    fontWeight: "bolder",
                    fontSize: "0.8rem",
                    marginBottom: "-1rem",
                    marginTop: "1rem",
                  }}
                >
                  Warning: All previous photos will be replaced
                </p>
              </>
            )}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1.5rem 0",
                alignItems: "center",
              }}
            >
              {updateBoxTag === "courseName" && (
                <input
                  type="text"
                  onChange={(e) => setUpdateInputValue(e.target.value)}
                />
              )}

              {updateBoxTag === "courseDescription" && (
                <textarea
                  cols="50"
                  rows="10"
                  onChange={(e) => setUpdateInputValue(e.target.value)}
                ></textarea>
              )}
              {updateBoxTag === "whatYouWillLearn" && (
                <>
                  <textarea
                    cols="50"
                    rows="10"
                    onChange={(e) => setUpdateInputValue(e.target.value)}
                  ></textarea>
                </>
              )}
              {updateBoxTag === "price" && (
                <input
                  type="number"
                  onChange={(e) => setUpdateInputValue(e.target.value)}
                />
              )}
              {updateBoxTag === "thumbnail" && (
                <input
                  type="file"
                  aname="files[]"
                  accept=".png, .jpg, .jpeg"
                  multiple
                  onChange={(e) => setUpdateInputValue(e.target.files)}
                />
              )}
              {updateBoxTag === "active" && (
                <>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setUpdateInputValue(e.target.value)}
                  >
                    <option value={true}>Active</option>
                    <option value={false}>Not active</option>
                  </select>
                </>
              )}
              {updateBoxTag === "courseProgress" && (
                <input
                  type="number"
                  onChange={(e) => setUpdateInputValue(e.target.value)}
                />
              )}
              {updateBoxTag === "courseDuration" && (
                <>
                  <input
                    type="number"
                    onChange={(e) => setUpdateInputValue(e.target.value)}
                  />
                </>
              )}
              <button onClick={updateFor}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseEditContainer;
