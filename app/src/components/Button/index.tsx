import { Text } from "../Text";
import { Container } from "./styles";
import { StyleProp, ViewStyle } from "react-native";

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function Button({
  children,
  onPress,
  style,
  disabled = false,
}: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled} style={style}>
      <Text weight="600" color="#ffffff">
        {children}
      </Text>
    </Container>
  );
}
