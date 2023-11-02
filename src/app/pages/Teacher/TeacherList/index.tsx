import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseTeacherSlice } from "./slice";
import { teacherListSelector } from "./slice/selector";
import { TableHeaderProps } from "../../../components/Table/types";
import { TeacherItem } from "../../../../types/TeacherItem";
import { Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { path } from "../../../routes/path";
import Table from "../../../components/Table";

function TeacherList() {
  const { actions: teacherActions } = UseTeacherSlice();
  const dispatch = useDispatch();
  const teachers = useSelector(teacherListSelector);
  const headers: TableHeaderProps[] = [
    {
      id: "code",
      label: "Mã Giáo Viên",
      hasSort: false,
    },
    {
      id: "name",
      label: "Tên Giáo Viên",
      hasSort: false,
    },
    {
      id: "email",
      label: "Email",
      hasSort: false,
    },
    {
      id: "contactPhone",
      label: "Số Liên Hệ",
      hasSort: false,
    },
    {
      id: "nationality",
      label: "Quốc Tịch",
      hasSort: false,
    },
    {
      id: "classInPhone",
      label: "Số ClassIn",
      hasSort: false,
    },
    {
      id: "product",
      label: "Sản Phẩm",
      hasSort: false,
    },
  ];

  useEffect(() => {
    dispatch(teacherActions.getTeachers());
  }, []);

  const renderItem = (item: TeacherItem) => {
    return [
      <Typography>{item.code}</Typography>,
      <Typography>{item.fullName}</Typography>,
      <Typography>{item.email}</Typography>,
      <Typography>{item.contactPhone}</Typography>,
      <Typography>{item.countryName}</Typography>,
      <Typography>{item.classInPhone}</Typography>,
      <Typography>
        {item.products.map((value: any) => value.code).join(", ")}
      </Typography>,
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
        items={teachers?.content}
        totalElements={teachers?.totalElements}
      />
    </Card>
  );
}

export default TeacherList;
