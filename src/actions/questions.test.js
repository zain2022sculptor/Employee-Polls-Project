import { addQuestion } from "./questions";

describe("add Question", () => {
  it("will return an action type of AddQuestion", () => {
    var result = addQuestion("question");
    expect(result.type).toEqual("ADD_QUESTION");
  });
});
