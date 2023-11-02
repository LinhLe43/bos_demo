import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TeacherState } from "./type";
import { Pageable } from "../../../../../types/Pageable";
import { TeacherItem } from "../../../../../types/TeacherItem";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { teacherSaga } from "./saga";

export const initialState: TeacherState = {
  teacherItem: undefined,
};

const slice = createSlice({
  name: "teacherState",
  initialState,
  reducers: {
    getTeachers: {
      reducer(state) {
        return state;
      },
      prepare(params?: null, meta?: (error: any) => void) {
        console.log("params: ", params);
        return { payload: params, meta };
      },
    },
    getTeacherSuccess(state, action: PayloadAction<Pageable<TeacherItem>>) {
      console.log("action.payload: ", action.payload);

      state.teacherItem = action.payload;
    },
  },
});

export const { actions: teacherAction } = slice;

export const UseTeacherSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: teacherSaga });
  return { actions: slice.actions };
};
