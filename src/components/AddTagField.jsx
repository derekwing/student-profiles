import React from "react";
import "./AddTagField.css";

const AddTagField = ({ handleTagOnChange, handleTagSubmit, tagValue }) => {
  return (
    <form onSubmit={handleTagSubmit}>
      <input
        className="add-tag-field"
        placeholder="Add a Tag"
        type="text"
        value={tagValue}
        onChange={handleTagOnChange}></input>
    </form>
  );
};

export default AddTagField;
