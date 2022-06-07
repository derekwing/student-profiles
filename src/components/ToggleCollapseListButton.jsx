import React from "react";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const ToggleCollapseListButton = ({ setListOpen, listOpen }) => {
  const toggleList = () => {
    setListOpen(!listOpen);
  };

  return (
    <RemoveRoundedIcon
      className="toggle-collapse"
      onClick={toggleList}
      sx={{ fontSize: 50, color: "gray", "&:hover": { color: "black" } }}
    />
  );
};

export default ToggleCollapseListButton;
