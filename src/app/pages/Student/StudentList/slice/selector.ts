import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../../types/RootState";

const studentList = (root: RootState) => {
  return root?.studentState;
};

export const studentListSelector = createSelector(
  studentList,
  (root) => root?.studentItem
);
