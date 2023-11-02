import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../../types/RootState";

const teacherList = (root: RootState) => {
  return root?.teacherState;
};

export const teacherListSelector = createSelector(
  teacherList,
  (root) => root?.teacherItem
);
