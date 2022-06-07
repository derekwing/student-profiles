import React from "react";
import ToggleExpandIcon from "@mui/icons-material/AddRounded";

const ToggleListViewButton = ({ setListOpen, listOpen }) => {
  const toggleList = () => {
    setListOpen(!listOpen);
  };

  return (
    <ToggleExpandIcon
      className="toggle-expand"
      onClick={toggleList}
      sx={{ fontSize: 50, color: "gray", "&:hover": { color: "black" } }}
    />
  );
};

export default ToggleListViewButton;
