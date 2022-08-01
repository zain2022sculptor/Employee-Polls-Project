export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUEST_TO_USER = "ADD_QUEST_TO_USER";
export const ADD_QUEST_ANS_TO_USER = "ADD_QUEST_ANS_TO_USER";

export function revceiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addQuestToUser(qid, uid) {
  return {
    type: ADD_QUEST_TO_USER,
    qid,
    uid,
  };
}

export function addQuestAnsToUser({ authedUser, qid, answer }) {
  return {
    type: ADD_QUEST_ANS_TO_USER,
    qid,
    uid: authedUser,
    answer,
  };
}
