import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";

import { Container, CategoriesContainer, MenuContainer } from "./styles";
import { useState } from "react";
import { Footer } from "../components/Footer";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");

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
          <Menu></Menu>
        </MenuContainer>
      </Container>

      <TableModal
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
        visible={isTableModalVisible}
      ></TableModal>

      <Footer
        buttonLabel="Novo pedido"
        buttonIsVisible={!selectedTable}
        onPress={() => setIsTableModalVisible(true)}
      />
    </>
  );
}
