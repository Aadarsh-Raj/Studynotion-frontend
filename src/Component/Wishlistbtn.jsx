import React, { useEffect, useState } from "react";
import { StroreFunction } from "../Store/store";
import { FaHeart } from "react-icons/fa";
import "./Style/wishlistbtn.css"
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
  } = StroreFunction();
  const [wishlistExist, setWishlistExist] = useState(false);
  console.log(user);
  useEffect(() => {
    setWishlistExist(user.userWishlist?.includes(props.courseId));
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
      setLoader(false);
      if (data.success) {
        setDialogError(false);
      } else {
        setDialogError(true);
      }

      setDialogMessage(data.message);
      setDialogAppear(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="wishlist-container" onClick={addToWishlist}>
        <FaHeart color={wishlistExist && "red"} />
      </div>
    </>
  );
};

export default Wishlistbtn;
