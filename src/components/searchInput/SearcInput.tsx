import React from 'react';
import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useThemeColors from '#hooks/useThemeColors';

const SearchInput: React.FC = () => {
  const { inputBgColor, inputBgActiveColor, inputTextColor, inputBorderColor } =
    useThemeColors();
  return (
    <Box
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '542px',
        border: `1px solid ${inputBorderColor}`,
        borderRadius: '3px',
        backgroundColor: inputBgColor,
        color: inputTextColor,
        $active: {
          backgroundColor: inputBgActiveColor,
        },
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchInput;
