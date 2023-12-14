import styled from 'styled-components';
import { blue, orange, purple, green } from '#styles/colorsConstants';

export const FavoriteBookCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 48px;
`;

export const FavoriteBookCardStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

export const InfoWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const ImgWrapper = styled.div<{
  $bgColor: 'blue' | 'orange' | 'purple' | 'green';
}>`
  width: 20%;
  display: flex;
  padding: 0 45px;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;
  background-color: ${(props) =>
    props.$bgColor === 'blue'
      ? blue
      : props.$bgColor === 'orange'
      ? orange
      : props.$bgColor === 'purple'
      ? purple
      : green};
`;

export const BookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TextInfoWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const BookTitle = styled.h4<{ $color: string }>`
  all: unset;
  color: ${(props) => props.$color};
  font-size: 24px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 30px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookDescription = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  margin-bottom: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
`;

export const Price = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  transition: 0.2s;
  font-size: 40px;
  transition: 0.2s;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 60px;
`;

export const LikeButton = styled.button<{
  $hoverColor: string;
  $red: string;
}>`
  all: unset;
  cursor: pointer;
  padding: 15px;
  color: ${(props) => props.$red};
  border-radius: 50%;
  transition: 0.2s;
  &:hover {
    color: ${(props) => props.$hoverColor};
  }
`;
