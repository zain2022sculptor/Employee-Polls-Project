import { _getQuestions } from "./_data";
import { _getUsers } from "./_data";
import { _saveQuestion } from "./_data";
import { _saveQuestionAnswer } from "./_data";

export async function _getinitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export async function saveQuestion(question) {
  return _saveQuestion(question);
}

export async function saveQuestionAnswer({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}
