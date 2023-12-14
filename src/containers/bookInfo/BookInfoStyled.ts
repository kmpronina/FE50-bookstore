import { blue, green, orange, purple } from '#styles/colorsConstants';
import styled from 'styled-components';

export const BookInfoWrapper = styled.div`
  width: 100%;
`;

export const BookInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ErrorInfo = styled.span``;

export const ImgAndPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const ImgWrapper = styled.div<{
  $bgColor?: 'blue' | 'orange' | 'purple' | 'green';
}>`
  position: relative;
  width: 35%;
  display: flex;
  padding: 40px 80px;
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

export const LikeButton = styled.button<{
  $color: string;
  $hoverColor: string;
  $iconColor: string;
  $isLiked: boolean;
  $red: string;
}>`
  all: unset;
  background-color: ${(props) => props.$color};
  color: ${(props) => (props.$isLiked ? props.$red : props.$iconColor)};
  width: 56px;
  height: 56px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => props.$hoverColor};
  }
  &:active {
    background-color: ${(props) => props.$color};
  }
`;

export const PriceCard = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

export const NumbersLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const DetailArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DetailRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DetailName = styled.span<{ $color: string }>`
  font-size: 16px;
  transition: 0.2s;
  color: ${(props) => props.$color};
  font-weight: 400;
  line-height: 32px;
  text-transform: capitalize;
`;

export const DetailValue = styled.span<{ $color: string }>`
  font-size: 16px;
  max-width: 60%;
  text-align: right;
  transition: 0.2s;
  color: ${(props) => props.$color};
  font-weight: 400;
  line-height: 32px;
`;

export const LinkToChapter = styled.a<{ $color: string }>`
  all: unset;
  cursor: pointer;
  align-self: center;
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
  transition: 0.2s;
  &:hover {
    font-size: 17px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const TabButton = styled.button<{
  $isActive: boolean;
  $colorActive: string;
  $colorInactive: string;
}>`
  all: unset;
  padding: 0 15px;
  color: ${(props) =>
    props.$isActive ? props.$colorActive : props.$colorInactive};
  font-size: 16px;
  font-weight: 400;
  line-height: 50px;
  text-transform: capitalize;
  transition: 0.2s;
  border-bottom: ${(props) => (props.$isActive ? '1px solid black' : 'none')};
`;

export const Description = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  transition: 0.2s;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
`;

export const InteractionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;
`;
