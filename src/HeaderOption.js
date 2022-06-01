import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {/* this will render the icon when we pass the icon component*/}
      {/* if we get passed an icon go ahead and render the above */}

      {avatar && (
        <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>
      )}

      {/* if we get passed an avatar go ahead and render the above */}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
