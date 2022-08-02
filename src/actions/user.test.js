import { addQuestToUser } from "./users";

describe("add Question to User", () => {
  it("will return an action type of ADD Question to User", () => {
    var result = addQuestToUser("question");
    expect(result.type).toEqual("ADD_QUEST_TO_USER");
  });
});
