import React from "react";

const Upload = () => {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Title</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Directions</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label for="exampleFormControlFile1">Image</label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          ></input>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          ></input>
          <label class="form-check-label" for="inlineCheckbox1">
            1
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          ></input>
          <label class="form-check-label" for="inlineCheckbox2">
            2
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Upload;
