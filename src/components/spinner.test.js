import { render } from "@testing-library/react";

import { Spinner } from "./spinner";

describe("Spinner tests", () => {
  it("Should render correctly", () => {
    const component = render(<Spinner />);
    component.getByRole("status");
    expect(component.container).toMatchSnapshot();
  });
});
