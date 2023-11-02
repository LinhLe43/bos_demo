import { useRoutes } from "react-router-dom";
import { path } from "./path";
import HomePage from "../pages/HomePage";
import StudentList from "../pages/Student/StudentList";
import PartnerList from "../pages/Partner/PartnerList";
import TeacherList from "../pages/Teacher/TeacherList";

export default function Routes() {
  return useRoutes([
    {
      path: path.root,
      element: <HomePage />,
    },
    {
      path: path.students,
      element: <StudentList />,
    },
    {
      path: path.teachers,
      element: <TeacherList />
    },
    {
      path: path.partners,
      element: <PartnerList />,
    },
  ]);
}
