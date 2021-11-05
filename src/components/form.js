import { useState } from "react";
import Button from "react-bootstrap/Button";
import RBForm from "react-bootstrap/Form";

export const Form = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <RBForm className="d-flex" onSubmit={onSubmit(text, setText)}>
      <RBForm.Control
        placeholder="Insert text"
        value={text}
        onChange={handleChange}
        disabled={isLoading}
      />
      <Button className="ms-2" type="submit" disabled={isLoading}>
        Send
      </Button>
    </RBForm>
  );
};
