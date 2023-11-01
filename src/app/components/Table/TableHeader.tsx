// material
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

import { TableHeaderProps } from './types';

// ----------------------------------------------------------------------

interface Props {
  sort: string[];
  headLabel: TableHeaderProps[];
  onRequestSort: (event: any, property: string) => void;
  headerBackgroundColor?: string;
}

export default function TableHeader(props: Props) {
  const { sort, headLabel, onRequestSort, headerBackgroundColor } = props;

  const createSortHandler =
    (property: string, hasSort?: boolean) => (event: any) => {
      if (hasSort) {
        onRequestSort(event, property);
      }
    };

  return (
    <TableHead>
      <TableRow>
        {headLabel.map((headCell: TableHeaderProps) => {
          const currentSort = sort.find(
            s => s && s.split(',')[0] === headCell.id,
          );
          const sortType = currentSort
            ? (currentSort.split(',')[1] as any)
            : 'desc';
          const sortBy = currentSort ? currentSort.split(',')[0] : '';

          return (
            <TableCell
              key={headCell.id}
              align={headCell.align}
              sortDirection={sortBy === headCell.id ? sortType : false}
              style={{
                width: headCell.width || 'auto',
                maxWidth: headCell.width || 'auto',
                minWidth: headCell.width || 'auto',
                padding: headCell.padding || '16px',
                position: headCell.position || 'static',
                left: headCell.left || 0,
                background: headerBackgroundColor || '#FFF',
                zIndex: headCell.position && 999,
              }}
              sx={
                headCell.hasNotWrap
                  ? {
                      textAlign: 'center',
                      whiteSpace: 'pre',
                      '& > span': {
                        width: headCell.width,
                      },
                      fontWeight: 'bold',
                      fontSize: '16px',
                      backgroundColor: headerBackgroundColor,
                      color: `${headerBackgroundColor ? 'white' : '#000'}`,
                    }
                  : {
                      whiteSpace: 'nowrap',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      backgroundColor: headerBackgroundColor,
                      color: `${headerBackgroundColor ? 'white' : '#000'}`,
                    }
              }
            >
              <TableSortLabel
                hideSortIcon={!headCell.hasSort}
                active={sortBy === headCell.id && headCell.hasSort}
                direction={sortBy === headCell.id ? sortType : 'desc'}
                onClick={createSortHandler(headCell.id, headCell.hasSort)}
              >
                {headCell.isReactNode ? (
                  headCell.label
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: headCell.label,
                    }}
                  />
                )}
                {headCell.icon}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}
