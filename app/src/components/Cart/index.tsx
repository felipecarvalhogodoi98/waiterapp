import { FlatList, TouchableOpacity } from "react-native";

import { Text } from "../Text";
import { CartItem } from "../../Types/cartItem";

import {
  Item,
  ProductItem,
  Actions,
  Image,
  ProductItemDetails,
  QuantityContainer,
} from "./styles";
import { formatPrice } from "../../Utils/FormatPrice";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { Product } from "../../Types/product";

interface CartProps {
  cartItems: CartItem[];
  removeToCart: (product: Product) => void;
  addToCart: (product: Product) => void;
}

export function Cart({ cartItems, addToCart, removeToCart }: CartProps) {
  return (
    <FlatList
      contentContainerStyle={{}}
      data={cartItems}
      keyExtractor={(item) => item.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: cartItem }) => (
        <Item>
          <ProductItem>
            <Image
              source={{
                uri: `http://192.168.0.117:3001/uploads/${cartItem.product.imagePath}`,
              }}
            />
            <QuantityContainer>
              <Text size={14} color="#666">
                {cartItem.quantity}x
              </Text>
            </QuantityContainer>
            <ProductItemDetails>
              <Text size={14} weight="600">
                {cartItem.product.name}
              </Text>
              <Text size={14} color="#666">
                {formatPrice(cartItem.product.price)}
              </Text>
            </ProductItemDetails>
          </ProductItem>

          <Actions>
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => addToCart(cartItem.product)}
            >
              <PlusCircle />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeToCart(cartItem.product)}>
              <MinusCircle />
            </TouchableOpacity>
          </Actions>
        </Item>
      )}
    />
  );
}
