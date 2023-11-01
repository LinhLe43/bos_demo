import { StudentItem } from "../../../../../types/StudentItem";

export interface StudentStage {
  studentItem?: ApiFormatData<StudentItem>;
}

export interface ApiFormatData<T> {
  content: T[];
  total: number;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty?: boolean;
    unsorted?: boolean;
    sorted?: boolean;
  };
  numberOfElements: number;
  first?: boolean;
  last?: boolean;
  pageable: {
    pageNumber?: number;
    pageSize?: number;
    sort?: string[];
  };
  empty?: boolean;
}
