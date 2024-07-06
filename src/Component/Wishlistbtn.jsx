import React, { useEffect, useState } from "react";
import { StroreFunction } from "../Store/store";
import { FaHeart } from "react-icons/fa";
import "./Style/wishlistbtn.css";
const Wishlistbtn = (props) => {
  const {
    apiUrl,
    token,
    user,
    setDialogAppear,
    setDialogError,
    dialogAppear,
    setDialogMessage,
    setLoader,
    fetchOwnProfile,
    fetchAllCourses,
  } = StroreFunction();
  const [wishlistExist, setWishlistExist] = useState(false);
  useEffect(() => {
    setWishlistExist(user?.userWishlist.includes(props.courseId));
  }, [dialogAppear]);
  const addToWishlist = async () => {
    try {
      setLoader(true);
      const response = await fetch(
        `${apiUrl}/user/wishlist/${props.courseId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      await fetchOwnProfile();
      await fetchAllCourses();
      setLoader(false);
      if (data.success) {
        setDialogError(false);
      } else {
        setDialogError(true);
      }

      setDialogMessage(data.message);
      setDialogAppear(true);
    } catch (error) {
      setLoader(false);
      setDialogError(true);
      setDialogMessage("Failed to add to wishlist. Please try again later.");
      setDialogAppear(true);
    }
  };
  return (
    <>
      <div className="wishlist-container" onClick={addToWishlist}>
        <FaHeart color={wishlistExist ? "red" : "white"} />
      </div>
    </>
  );
};

export default Wishlistbtn;
