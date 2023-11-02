import { call, put, takeEvery } from "redux-saga/effects";
import { studentAction as action } from ".";
import { getAllStudent } from "../../../../service/api/studentApi";
import { StudentItem } from "../../../../../types/StudentItem";
import { Pageable } from "../../../../../types/Pageable";

function* getStudentData() {
  try {
    const response: Pageable<StudentItem> = yield call(getAllStudent);
    console.log(response);
    yield put(action.getStudentSuccess(response));
  } catch (error) {}
}

export function* studentSaga() {
  yield takeEvery(action.getStudents.type, getStudentData);
}
