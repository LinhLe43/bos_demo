import { useEffect } from "react";
import { UseStudentSlice } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { studentListSelector } from "./slice/selector";
import { TableHeaderProps } from "../../../components/Table/types";
import { StudentItem } from "../../../../types/StudentItem";
import { Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { path } from "../../../routes/path";
import Table from "../../../components/Table";

function StudentList() {
  const { actions: studentActions } = UseStudentSlice();
  const dispatch = useDispatch();
  const students = useSelector(studentListSelector);
  const headers: TableHeaderProps[] = [
    {
      id: "code",
      label: "Mã học viên",
      hasSort: false,
    },
    {
      id: "name",
      label: "Tên học viên",
      hasSort: false,
    },
    {
      id: "representativePhone",
      label: "SĐT Người Đại Diện",
      hasSort: false,
    },
    {
      id: "classInPhone",
      label: "Số ClassIn",
      hasSort: false,
    },
  ];

  useEffect(() => {
    dispatch(studentActions.getStudents());
  }, []);

  const renderItem = (item: StudentItem) => {
    return [
      <Typography>{item.code}</Typography>,
      <Typography>{item.fullName}</Typography>,
      <Typography>{item.representativePhone}</Typography>,
      <Typography>{item.classInPhone}</Typography>,
    ];
  };

  return (
    <Card
      sx={{
        p: "20px",
      }}
    >
      <Link to={path.root}>Back</Link>
      <Table
        headers={headers}
        renderItem={renderItem}
        items={students?.content}
        totalElements={students?.totalElements}
      />
    </Card>
  );
}

export default StudentList;
