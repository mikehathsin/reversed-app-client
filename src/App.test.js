import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { App } from "./App";
import { store } from "./redux";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    component.getByText("Results:");
    expect(component.container).toMatchSnapshot();
  });
});
