import {
  black,
  white,
  gray20,
  gray40,
  gray60,
  gray80,
  red,
  blue,
  green,
  orange,
  purple,
} from './colorsConstants';

type ThemeColorType = {
  backgroundColor: string;
  cardBgColor: string;
  textColorBlack: string;
  textColorGray: string;
  titleColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
  inputBgColor: string;
  inputBgActiveColor: string;
  inputTextColor: string;
  inputBorderColor: string;
  buttonBgHoverColor: string;
  iconButtonColor: string;
};

type ThemeVariant = {
  dark: ThemeColorType;
  light: ThemeColorType;
};

export const colors: ThemeVariant = {
  light: {
    backgroundColor: white,
    cardBgColor: blue,
    textColorBlack: black,
    textColorGray: gray80,
    titleColor: black,
    buttonBgColor: black,
    buttonBgHoverColor: gray80,
    buttonTextColor: white,
    inputBgColor: white,
    inputBgActiveColor: gray20,
    inputBorderColor: gray40,
    inputTextColor: gray80,
    iconButtonColor: black,
  },
  dark: {
    backgroundColor: black,
    cardBgColor: orange,
    textColorBlack: white,
    textColorGray: gray20,
    titleColor: white,
    buttonBgColor: gray20,
    buttonBgHoverColor: white,
    buttonTextColor: black,
    inputBgColor: black,
    inputBgActiveColor: gray80,
    inputBorderColor: gray80,
    inputTextColor: white,
    iconButtonColor: white,
  },
};
