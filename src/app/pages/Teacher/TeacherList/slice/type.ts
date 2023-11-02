import { Pageable } from "../../../../../types/Pageable";
import { TeacherItem } from "../../../../../types/TeacherItem";

export interface TeacherState {
  teacherItem?: Pageable<TeacherItem>;
}
