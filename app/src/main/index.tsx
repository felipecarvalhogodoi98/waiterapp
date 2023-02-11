import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Button } from "../components/Button";
import { TableModal } from "../components/TableModal";

import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
} from "./styles";
import { useState } from "react";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  return (
    <>
      <Container>
        <Header />

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

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo pedido
            </Button>
          )}
        </FooterContainer>
      </Footer>
    </>
  );
}
