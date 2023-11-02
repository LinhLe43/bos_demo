import { Pageable } from "../../../../../types/Pageable";
import { StudentItem } from "../../../../../types/StudentItem";

export interface StudentStage {
  studentItem?: Pageable<StudentItem>;
}
