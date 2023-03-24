import { CartItem } from "../../Types/cartItem";
import { Product } from "../../Types/product";
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
  price?: number;
  removeToCart?: (product: Product) => void;
  addToCart?: (product: Product) => void;
}

export function Footer({
  onPress,
  hasTable = true,
  buttonLabel,
  cartItems = [],
  price,
  removeToCart,
  addToCart,
}: FooterProps) {
  return (
    <FooterView>
      <FooterContainer>
        {!hasTable ? (
          <Text color="#666">Footer Menu</Text>
        ) : (
          <>
            {addToCart && removeToCart && (
              <Cart
                cartItems={cartItems}
                removeToCart={removeToCart}
                addToCart={addToCart}
              />
            )}
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
