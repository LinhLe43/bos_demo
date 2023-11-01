import { ApiFormatData } from "./type";
import { call, put, takeEvery } from "redux-saga/effects";
import { studentAction as action } from ".";
import { getAllStudent } from "../../../../service/api/studentApi";
import { StudentItem } from "../../../../../types/StudentItem";

function* getStudentData() {
  try {
    const response: ApiFormatData<StudentItem> = yield call(getAllStudent);
    console.log(response);
    yield put(action.getStudentSuccess(response));
  } catch (error) {}
}

export function* studentSaga() {
  yield takeEvery(action.getStudents.type, getStudentData);
}
