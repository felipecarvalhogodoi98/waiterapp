import { FlatList } from "react-native";

import { products } from "../../mocks/products";
import { Text } from "../Text";
import { formatPrice } from "../../Utils/FormatPrice";

import {
  Product as ProductContainer,
  ProdutcImage,
  ProductDetails,
  Separator,
  AddToCartButton,
} from "./styles";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { useState } from "react";
import { Product } from "../../Types/product";

export function Menu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  function closeModal() {
    setIsModalVisible(false);
    setSelectedProduct(null);
  }

  return (
    <>
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProdutcImage
              source={{
                uri: `http://192.168.2.120:3001/uploads/${product.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text color="#666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight="600">
                {formatPrice(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />

      <ProductModal
        visible={isModalVisible}
        product={selectedProduct}
        onClose={closeModal}
      />
    </>
  );
}
