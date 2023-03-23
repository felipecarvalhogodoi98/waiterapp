import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";

import { Container, CategoriesContainer, MenuContainer } from "./styles";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { CartItem } from "../Types/cartItem";
import { products } from "../mocks/products";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("1");
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      quantity: 1,
      product: products[0],
    },
    {
      quantity: 2,
      product: products[1],
    },
  ]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleCancelOrder() {
    setSelectedTable("");
  }

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} cancelOrder={handleCancelOrder} />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <TableModal
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
        visible={isTableModalVisible}
      ></TableModal>

      <Footer
        cartItems={cartItems}
        buttonLabel="Novo pedido"
        hasTable={!!selectedTable}
        onPress={() => setIsTableModalVisible(true)}
      />
    </>
  );
}
