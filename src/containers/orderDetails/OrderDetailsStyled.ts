import styled from 'styled-components';

export const OrderDetailsStyled = styled.div`
  width: 25%;
  align-self: end;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 50px;
`;

export const PreparatoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const OrderDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`;

export const OrderDetailName = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  text-transform: capitalize;
`;

export const OrderDetailValue = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

export const TotalDetail = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 40px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 60px;
  word-wrap: break-word;
  text-transform: uppercase;
`;
