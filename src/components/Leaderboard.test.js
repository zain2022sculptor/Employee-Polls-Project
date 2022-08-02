import { render } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import Leaderboard from "./Leaderboard";
import { store } from "../index";
import { BrowserRouter } from "react-router-dom";

describe("Leaderboard", () => {
  it("will match the snapshot", () => {
    var view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Leaderboard />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
