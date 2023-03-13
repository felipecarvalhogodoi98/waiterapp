import styled from "styled-components/native";

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 24px;
  top: 24px;
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
`;

export const ModalBody = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding: 32px 24px 0;
`;

export const Header = styled.View``;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`;

export const Ingredient = styled.View`
  flex-direction: row;
  border: 1px solid rgba(204, 204, 204, 0.3);
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 4px;
`;
