import { render, fireEvent } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "../index";
import { BrowserRouter } from "react-router-dom";

describe("fire event on button", () => {
  it("will find Answered Questions in the Document", () => {
    var view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    var input = view.getByTestId("select-user").querySelector("input");
    fireEvent.change(input, { target: { value: "sarahedo" } });
    expect(input).toHaveValue("sarahedo");
  });
});
