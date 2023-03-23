import { CartItem } from "../../Types/cartItem";
import { formatPrice } from "../../Utils/FormatPrice";
import { Button } from "../Button";
import { Cart } from "../Cart";
import { Text } from "../Text";
import {
  Footer as FooterView,
  FooterContainer,
  FooterInfo,
  Price,
} from "./styles";

interface FooterProps {
  buttonLabel: string;
  onPress: () => void;
  hasTable?: boolean;
  cartItems?: CartItem[];
}

export function Footer({
  onPress,
  hasTable = true,
  buttonLabel,
  cartItems = [],
}: FooterProps) {
  const price = cartItems.reduce((acc, item) => acc + item.product.price, 0);

  return (
    <FooterView>
      <FooterContainer>
        {!hasTable ? (
          <Text color="#666">Footer Menu</Text>
        ) : (
          <>
            <Cart cartItems={cartItems} />
            <FooterInfo>
              {price != undefined && (
                <Price>
                  <Text color="#666">Preço</Text>
                  <Text size={20} weight="600">
                    {formatPrice(price)}
                  </Text>
                </Price>
              )}
              <Button
                disabled={price == 0}
                onPress={onPress}
                style={{ flexGrow: 1 }}
              >
                {buttonLabel}
              </Button>
            </FooterInfo>
          </>
        )}
      </FooterContainer>
    </FooterView>
  );
}
