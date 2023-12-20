import styled from 'styled-components';
import { blue, green, orange, purple } from '#styles/colorsConstants';

export const SearchWrapper = styled.div`
  position: relative;
  width: 50%;
`;

export const SearchInputStyled = styled.div<{
  $inputBorderColor: string;
  $inputTextColor: string;
  $isActive: boolean;
  $inputBgActiveColor: string;
  $inputBgColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${(props) => props.$inputBorderColor};
  color: ${(props) => props.$inputTextColor};
  background-color: ${(props) =>
    props.$isActive === true ? props.$inputBgActiveColor : props.$inputBgColor};
  gap: 3px;
`;

export const DropWrapper = styled.div<{
  $bgColor: string;
  $textColor: string;
}>`
  position: absolute;
  width: 100%;
  top: 50;
  left: 0;
  z-index: 10;
  padding: 10px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
`;

export const SearchedBooksDropWrapper = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3px;
`;

export const SearchedBookCard = styled.li`
  all: unset;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SearchedBookImageWrapper = styled.div<{ $bgColor: string }>`
  width: 80px;
  height: 60px;
  background-color: ${(props) =>
    props.$bgColor === 'green'
      ? green
      : props.$bgColor === 'blue'
      ? blue
      : props.$bgColor === 'orange'
      ? orange
      : purple};
  padding: 5px;
`;

export const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const BookTitle = styled.span``;
