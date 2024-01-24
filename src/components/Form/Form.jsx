import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="email-form-container">
      <form>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label>Mensaje</label>
          <textarea />
        </div>
        <button className="formButton" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
