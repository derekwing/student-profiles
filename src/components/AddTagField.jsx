import React from "react";
import "./AddTagField.css";

const AddTagField = ({
  setTagValue,
  tagValue,
  handleTagOnChange,
  handleTagSubmit,
}) => {
  return (
    <form onSubmit={handleTagSubmit}>
      <input
        id="add-tag-field"
        placeholder="Add a Tag"
        type="text"
        onChange={handleTagOnChange}></input>
    </form>
  );
};

export default AddTagField;
