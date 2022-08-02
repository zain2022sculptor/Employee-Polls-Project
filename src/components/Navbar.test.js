import { render } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import Navbar from "./Navbar";
import { store } from "../index";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  it("will match the snapshot", () => {
    var view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
