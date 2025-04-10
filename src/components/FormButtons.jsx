import React from "react";
import "./../styles/form-buttons.css";
function FormButtons({ remove, cancel, save }) {
  return (
    <div className="form-buttons">
      <button className="delete" onClick={remove} type="button">
        <i className="fa-solid fa-trash" />
        Delete
      </button>
      <div className="main-buttons">
        <button className="cancel" onClick={cancel} type="button">
          <i className="fa-solid fa-xmark"></i>
          Cancel
        </button>
        <button className="save" onClick={save} type="submit">
          <i className="fa-solid fa-floppy-disk"></i>
          Save
        </button>
      </div>
    </div>
  );
}

export default FormButtons;
