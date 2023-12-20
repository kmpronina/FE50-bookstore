import React from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton, List, ListItem } from '@mui/material';
import useThemeColors from '#hooks/useThemeColors';

interface Props {
  onPageChange: (newPage: number) => void;
  activePage: number;
  totalBooksCount: number;
  rowsPerPage: number;
}

const Pagination: React.FC<Props> = (props) => {
  const { onPageChange, activePage, totalBooksCount, rowsPerPage } = props;

  const { paginationButtonColor, paginationButtonActiveColor } =
    useThemeColors();

  const handleBackwardClick = () => {
    onPageChange(activePage - 1);
  };

  const handleForwardClick = () => {
    onPageChange(activePage + 1);
  };

  const handlePageSelect = (newPage: number) => {
    onPageChange(newPage);
  };

  const buttonStyle = {
    color: paginationButtonActiveColor,
    transition: '0.2s',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '24px',
  };

  const TotalCountOfPages =
    Math.ceil(totalBooksCount / rowsPerPage) <= 100
      ? Math.ceil(totalBooksCount / rowsPerPage)
      : 100;

  const pageNumbersToShow = (i: number) => {
    const set = new Set([
      1,
      2,
      i - 1,
      i,
      i + 1,
      TotalCountOfPages - 1,
      TotalCountOfPages,
    ]);
    set.forEach((element) => {
      if (element <= 0) {
        set.delete(element);
      }
    });
    return set;
  };

  return (
    <List
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '24px',
        marginBottom: '50px',
      }}
    >
      <ListItem key={0}>
        <IconButton
          onClick={handleBackwardClick}
          sx={buttonStyle}
          disabled={activePage === 1}
        >
          <ArrowBack /> Prev
        </IconButton>
      </ListItem>
      <Box sx={{ display: 'flex' }}>
        {Array.from({ length: TotalCountOfPages })
          .map((_, index) => (
            <ListItem key={index + 1}>
              <IconButton
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '6px',
                  width: '27px',
                  height: '27px',
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: '24px',
                  color:
                    index + 1 === activePage
                      ? paginationButtonActiveColor
                      : paginationButtonColor,
                  cursor: 'pointer',
                }}
                onClick={() => handlePageSelect(index + 1)}
              >
                {index + 1}
              </IconButton>
            </ListItem>
          ))
          .filter((_, index) => pageNumbersToShow(activePage).has(index + 1))}
      </Box>
      <ListItem key={101} sx={{ justifyContent: 'flex-end' }}>
        <IconButton
          onClick={handleForwardClick}
          sx={buttonStyle}
          disabled={activePage === TotalCountOfPages}
        >
          Next
          <ArrowForward />
        </IconButton>
      </ListItem>
    </List>
  );
};

export default Pagination;
