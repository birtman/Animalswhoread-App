import React from "react";

const Form = props => (
  <form onSubmit={props.getArticles} style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="articleName" />
    <button className="form__button">friends'n'foes stalking</button>
  </form>
);

export default Form;
