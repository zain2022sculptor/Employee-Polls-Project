import { _getinitialData } from "../utils/api";
import { revceiveUsers, addQuestToUser, addQuestAnsToUser } from "./users";
import { reveiveQuestions, addQuestion, addQuestAnswer } from "./questions";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return async (dispatch) => {
    return _getinitialData().then(({ users, questions }) => {
      dispatch(reveiveQuestions(questions));
      dispatch(revceiveUsers(users));
      //dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestToUser(question.id, question.author));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddQuestAns(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    return saveQuestionAnswer({
      answer: answer,
      authedUser: authedUser,
      qid: qid,
    })
      .then(() => {
        dispatch(addQuestAnswer({ authedUser, qid, answer }));
        dispatch(addQuestAnsToUser({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading()));
  };
}
