import { FlatList, Modal } from "react-native";
import { Product } from "../../Types/product";
import { Footer } from "../Footer";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import {
  CloseButton,
  Header,
  Image,
  IngredientsContainer,
  Ingredient,
  ModalBody,
} from "./styles";

interface ProductModapProps {
  visible: boolean;
  onClose: () => void;
  product: Product | null;
}

export function ProductModal({ visible, onClose, product }: ProductModapProps) {
  if (!product) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.2.120:3001/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight="600">
            {product.name}
          </Text>
          <Text color="#666" style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="600" color="#666">
              Ingredientes
            </Text>

            <FlatList
              style={{ marginTop: 16 }}
              data={product.ingredients}
              keyExtractor={(ingredients) => ingredients._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>
      <Footer
        buttonLabel="Adicionar ao pedido"
        onPress={() => console.log("ok")}
        price={product.price}
      />
    </Modal>
  );
}
