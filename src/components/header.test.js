import { render } from "@testing-library/react";

import { Header } from "./header";

describe("Header tests", () => {
  it("Should render correctly", () => {
    const component = render(<Header error={null} />);
    component.getByText("Results:");
    expect(component.container).toMatchSnapshot();
  });

  it("Should show the error message", () => {
    const error = "Network Error";
    const component = render(<Header error={error} />);
    component.getByText(`Error to fetch: ${error}`);
    expect(component.container).toMatchSnapshot();
  });
});
