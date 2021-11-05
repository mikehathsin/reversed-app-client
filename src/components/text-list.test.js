import { render } from "@testing-library/react";

import { TextList } from "./text-list";

describe("TextList tests", () => {
  it("Should render correctly without data", () => {
    const component = render(<TextList data={[]} />);
    component.getByText("No data. Send your first text!");
    expect(component.container).toMatchSnapshot();
  });

  it("Should render correctly with data", () => {
    const component = render(
      <TextList
        data={[
          { id: "1", text: "ana", palindrome: true, datetime: "2:23:43 PM" },
        ]}
      />
    );
    component.getByText("ana");
    component.getByText("It's palindrome!");
    component.getByText("2:23:43 PM");
    expect(component.container).toMatchSnapshot();
  });
});
