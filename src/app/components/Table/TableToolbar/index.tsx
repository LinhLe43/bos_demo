import { styled } from '@mui/material/styles';
import { Toolbar, Typography } from '@mui/material';

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 80,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 !important',
}));

interface Props {
  numSelected: number;
}

export default function TableToolbar(props: Props) {
  const { numSelected } = props;

  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 && (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      )}
    </RootStyle>
  );
}
