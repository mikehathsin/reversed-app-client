import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { useDispatch, useSelector } from "react-redux";

import { Form } from "./components/form";
import { Header } from "./components/header";
import { Spinner } from "./components/spinner";
import { TextList } from "./components/text-list";
import { sendText } from "./redux/requests";

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector(
    (reducers) => reducers.requests
  );

  const handleSubmit = (text, setText) => {
    return (event) => {
      event.preventDefault();
      dispatch(sendText(text));
      setText("");
    };
  };

  return (
    <Container fluid>
      <Row className="py-4 bg-danger justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit} isLoading={isLoading} />
        </Col>
      </Row>

      <Row className="py-4 justify-content-center">
        <Col md={6}>
          <Header error={error} />
        </Col>
      </Row>

      <Row className="mb-4 justify-content-center">
        <Col md={6}>{isLoading ? <Spinner /> : <TextList data={data} />}</Col>
      </Row>
    </Container>
  );
};
