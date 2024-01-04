import React, { useContext } from 'react';
import { ThemeContext, ThemeEnum } from '#store/context/ThemeContext';
import useThemeColors from '#hooks/useThemeColors';
import Button from '#ui/button';
import { ThemeSwitcherWrapper, FormSubtitle } from './ThemeSwitcherStyled';

const ThemeSwitcher: React.FC = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  const { textColorBlack } = useThemeColors();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light
    );
  };

  return (
    <ThemeSwitcherWrapper>
      <FormSubtitle $color={textColorBlack}>theme</FormSubtitle>
      <Button type={'button'} onClick={toggleTheme} width={'40%'}>
        {theme === 'light' ? 'switch to dark theme' : 'switch to light theme'}
      </Button>
    </ThemeSwitcherWrapper>
  );
};

export default ThemeSwitcher;
