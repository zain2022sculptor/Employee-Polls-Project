import { render, fireEvent } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "../index";
import { BrowserRouter } from "react-router-dom";

describe("find answered questions", () => {
  it("will find Answered Questions in the Document", () => {
    var view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    var submitButton = view.getByTestId("button");
    fireEvent.click(submitButton);
    expect(view.getByTestId("result")).toBeInTheDocument();
  });
});
