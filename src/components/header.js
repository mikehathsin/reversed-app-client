import { Fragment } from "react";
import Alert from "react-bootstrap/Alert";

export const Header = ({ error }) => {
  return (
    <Fragment>
      {error && <Alert variant="danger">Error to fetch: {error}</Alert>}
      <h1>Results:</h1>
    </Fragment>
  );
};
