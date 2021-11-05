import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

export const TextList = ({ data }) => {
  const mapDataToElements = () => {
    return data.map(({ id, text, palindrome, datetime }) => {
      return (
        <div key={id} className="p-2 d-flex flex-column bg-light border">
          <div className="d-flex justify-content-between">
            <span>{text}</span>
            {palindrome && <Badge bg="success">It's palindrome!</Badge>}
          </div>
          <div className="align-self-end">{datetime}</div>
        </div>
      );
    });
  };

  return (
    <Stack gap={2}>
      {Boolean(data.length) ? (
        mapDataToElements()
      ) : (
        <h4>No data. Send your first text!</h4>
      )}
    </Stack>
  );
};
