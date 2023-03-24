import styled from "styled-components/native";

//altura flexivel com no maximo 150px
export const CartContainer = styled.View`
  width: 100%;
  max-height: 150px;
`;

export const Item = styled.View`
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ProductItem = styled.View`
  flex-direction: row;
  margin-right: 16px;
`;

export const Actions = styled.View`
  margin-left: auto;
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 48px;
  height: 40px;
  border-radius: 6px;
`;

export const ProductItemDetails = styled.View`
  justify-content: space-between;
`;

export const QuantityContainer = styled.View`
  min-width: 20px;
  margin-left: 12px;
`;
