import { call, put, takeEvery } from "redux-saga/effects";
import { Pageable } from "../../../../../types/Pageable";
import { TeacherItem } from "../../../../../types/TeacherItem";
import { getAllTeacher } from "../../../../service/api/teacherApi";
import { teacherAction as action } from ".";

function* getTeacherData() {
  try {
    const response: Pageable<TeacherItem> = yield call(getAllTeacher);
    console.log(response);
    yield put(action.getTeacherSuccess(response));
  } catch (error) {}
}

export function* teacherSaga() {
  yield takeEvery(action.getTeachers.type, getTeacherData);
}
