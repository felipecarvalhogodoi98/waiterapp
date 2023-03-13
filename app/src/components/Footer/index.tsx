import { formatPrice } from "../../Utils/FormatPrice";
import { Button } from "../Button";
import { Text } from "../Text";
import { Footer as FooterView, FooterContainer, Price } from "./styles";

interface FooterProps {
  buttonIsVisible?: boolean;
  buttonLabel: string;
  price?: number;
  onPress: () => void;
}

export function Footer({
  onPress,
  price,
  buttonIsVisible = true,
  buttonLabel,
}: FooterProps) {
  return (
    <FooterView>
      <FooterContainer>
        {buttonIsVisible && (
          <>
            {price && (
              <Price>
                <Text color="#666">Preço</Text>
                <Text size={20} weight="600">
                  {formatPrice(price)}
                </Text>
              </Price>
            )}
            <Button onPress={onPress}>{buttonLabel}</Button>
          </>
        )}
      </FooterContainer>
    </FooterView>
  );
}
