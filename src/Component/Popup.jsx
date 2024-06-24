import React, { useEffect, useState } from "react";
import "./Style/popup.css";
import { SiTicktick } from "react-icons/si";
import { LiaSkullCrossbonesSolid } from "react-icons/lia";
import { StroreFunction } from "../Store/store";

const Popup = () => {
  const { dialogAppear, setDialogAppear, dialogError, dialogMessage } =
    StroreFunction();
  const [animationClass, setAnimationClass] = useState("");
  useEffect(() => {
    if (dialogAppear) {
      setAnimationClass("show");
      const timer = setTimeout(() => {
        setAnimationClass("hide");
        setTimeout(() => setDialogAppear(false), 300);
      }, 2700);
      return () => clearTimeout(timer);
    }
  }, [dialogAppear]);

  return (
    <>
      <dialog
        className={`dialogbox ${animationClass}`}
        style={dialogError ? { color: "red" } : { color: "blue" }}
        open={dialogAppear}
      >
        <div className="inner-dialog-box">
          {dialogError ? <LiaSkullCrossbonesSolid /> : <SiTicktick />}
          {dialogMessage}
        </div>
      </dialog>
    </>
  );
};

export default Popup;
