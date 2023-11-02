import { StudentStage } from "../app/pages/Student/StudentList/slice/type";
import { TeacherState } from "../app/pages/Teacher/TeacherList/slice/type";

export interface RootState {
  studentState?: StudentStage;
  teacherState?: TeacherState;
}
