import RBSpinner from "react-bootstrap/Spinner";

export const Spinner = () => {
  return (
    <RBSpinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </RBSpinner>
  );
};
