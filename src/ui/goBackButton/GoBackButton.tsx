import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';
import useThemeColors from '#hooks/useThemeColors';
import { RouterLocationsEnum } from '#router/Router';

const GoBackButton: React.FC = () => {
  const navigation = useNavigate();

  const { titleColor } = useThemeColors();

  const handleGoBack = () => {
    navigation(RouterLocationsEnum.main);
  };

  return (
    <Tooltip title="Go back">
      <IconButton onClick={handleGoBack}>
        <KeyboardBackspace sx={{ fontSize: '36px', color: titleColor }} />
      </IconButton>
    </Tooltip>
  );
};

export default GoBackButton;
