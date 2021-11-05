import { render } from "@testing-library/react";

import { Form } from "./form";

describe("Form tests", () => {
  const handleSubmit = jest.fn();

  it("Should render correctly", () => {
    const component = render(<Form onSubmit={handleSubmit} />);
    component.getByPlaceholderText("Insert text");
    component.getByText("Send");
    expect(component.container).toMatchSnapshot();
  });
});
