import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StudentStage } from "./type";
import { StudentItem } from "../../../../../types/StudentItem";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { studentSaga } from "./saga";
import { Pageable } from "../../../../../types/Pageable";

export const initialState: StudentStage = {
  studentItem: undefined,
};

const slice = createSlice({
  name: "studentState",
  initialState,
  reducers: {
    getStudents: {
      reducer(state) {
        return state;
      },
      prepare(params?: null, meta?: (error: any) => void) {
        console.log("params: ", params);
        return { payload: params, meta };
      },
    },
    getStudentSuccess(state, action: PayloadAction<Pageable<StudentItem>>) {
      console.log("action.payload: ", action.payload);

      state.studentItem = action.payload;
    },
  },
});

export const { actions: studentAction } = slice;

export const UseStudentSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: studentSaga });
  return { actions: slice.actions };
};
