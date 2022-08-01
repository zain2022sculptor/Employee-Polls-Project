export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUEST_ANS = "ADD_QUEST_ANSWER";

export function reveiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_QUEST_ANS,
    authedUser,
    qid,
    answer,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
