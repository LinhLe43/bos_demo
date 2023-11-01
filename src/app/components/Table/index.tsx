/**
 *
 * Table
 *
 */
import {
  CircularProgress,
  Grid,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { isEmpty, isUndefined } from "lodash";
import { Fragment, memo, useEffect, useState } from "react";

import TableHead from "./TableHeader";
import { TableHeaderProps } from "./types";
import { FilterParams } from "../../../types/Filter";

interface Props {
  headers: TableHeaderProps[];
  limitElement?: number;
  pageNumber?: number;
  items?: any[];
  totalElements?: number;
  renderItem: (item: any, index?: number) => any[];
  renderCustomItem?: (item: any, index?: number) => any;
  onSelectRow?: (rowData: any) => void;
  onRequestSort?: (event: any, property: string) => void;
  onFetchDataForPage?: ({ page, size }: FilterParams) => void;
  sort?: string[];
  renderCollapses?: (item: any, index: number) => any;
  filter?: any;
  hidePagination?: boolean;
  headerBackgroundColor?: string;
  scrollVertical?: boolean;
  isCustomTable?: boolean;
}

const Table = memo(
  ({
    headers,
    limitElement = 50,
    pageNumber,
    items,
    renderItem,
    totalElements = 0,
    onSelectRow,
    onFetchDataForPage,
    onRequestSort,
    renderCollapses,
    hidePagination,
    sort = [],
    scrollVertical,
    filter,
    headerBackgroundColor,
    isCustomTable = false,
    renderCustomItem,
  }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const [page, setPage] = useState<number>(pageNumber || 0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(limitElement || 10);
    useEffect(() => {
      if (limitElement) {
        setRowsPerPage(limitElement);
      }
    }, [limitElement]);

    useEffect(() => {
      setPage(pageNumber || 0);
    }, [pageNumber]);

    const handleRequestSort = (event: any, property: string) => {
      if (onRequestSort) onRequestSort(event, property);
    };

    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number
    ) => {
      if (onFetchDataForPage) {
        setPage(newPage);
        onFetchDataForPage({ ...filter, page: newPage, size: rowsPerPage });
      }
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const newRowPerPage = parseInt(event.target.value, 10);
      setRowsPerPage(newRowPerPage);
      if (onFetchDataForPage) {
        onFetchDataForPage({ ...filter, page: 0, size: newRowPerPage });
      }
    };

    const handleSelectRow = (rowData: any) => {
      if (onSelectRow) {
        onSelectRow(rowData);
      }
    };

    const showHeader = (isShow?: boolean) => {
      return isShow !== undefined ? isShow : true;
    };

    return (
      <Grid sx={scrollVertical ? { maxHeight: 500, overflowX: "auto" } : {}}>
        <TableContainer>
          <MuiTable stickyHeader>
            <TableHead
              headerBackgroundColor={headerBackgroundColor}
              sort={sort}
              headLabel={headers}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {isEmpty(items) ? (
                <TableRow hover>
                  <TableCell align="center" colSpan={headers.length}>
                    {isUndefined(items) ? (
                      <CircularProgress />
                    ) : (
                      <Typography>Không có dữ liệu</Typography>
                    )}
                  </TableCell>
                </TableRow>
              ) : (
                items?.map((item, index) => (
                  <Fragment key={index}>
                    {!isCustomTable ? (
                      <TableRow
                        key={index}
                        onClick={(event) => handleSelectRow(item)}
                        hover
                        sx={{ ":hover": { cursor: "pointer" } }}
                      >
                        {renderItem(item, index).map((col, index) => {
                          return (
                            showHeader(headers[index]?.isShow) && (
                              <TableCell
                                sx={{
                                  wordBreak: "break-word",
                                  whiteSpace: "nowrap",
                                  position:
                                    headers[index]?.position &&
                                    "-webkit-sticky",
                                }}
                                key={index}
                                align={headers[index]?.align}
                                style={{
                                  width: headers[index]?.width,
                                  position: headers[index]?.position,
                                  left: headers[index]?.left,
                                  background:
                                    headers[index]?.position && "#FFF",
                                }}
                                onClick={(event) => {
                                  if (headers[index].disable) {
                                    event.stopPropagation();
                                  }
                                }}
                              >
                                {col}
                              </TableCell>
                            )
                          );
                        })}
                      </TableRow>
                    ) : (
                      !!(typeof renderCustomItem !== "undefined") &&
                      renderCustomItem(item, index)
                    )}
                    {renderCollapses && renderCollapses(item, index)}
                  </Fragment>
                ))
              )}
            </TableBody>
          </MuiTable>
        </TableContainer>
        {!hidePagination && (
          <TablePagination
            rowsPerPageOptions={[50, 100, 200]}
            component="div"
            count={totalElements}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage="Số dòng trên 1 trang"
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Grid>
    );
  }
);

export default Table;
