import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";

import { Container, CategoriesContainer, MenuContainer } from "./styles";
import { useMemo, useState } from "react";
import { Footer } from "../components/Footer";
import { CartItem } from "../Types/cartItem";
import { Product } from "../Types/product";

//@TODO: MOBX
//@TODO: React.FC
//@TODO: useMemo, useCallback
//@TODO: integration with API

export const Main: React.FC = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartPrice = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleCancelOrder() {
    setSelectedTable("");
    setCartItems([]);
  }

  function openModal() {
    setIsTableModalVisible(true);
  }

  function closeModal(resetCart = false) {
    setIsTableModalVisible(false);
    if (resetCart) setCartItems([]);
  }

  function addToCart(product: Product) {
    if (selectedTable === "") {
      openModal();
    }

    setCartItems((state) => {
      if (state.find((item) => item.product._id === product._id)) {
        const newCartItems = state.map((item) => {
          if (item.product._id === product._id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        return newCartItems;
      }
      return [
        ...cartItems,
        {
          quantity: 1,
          product: product,
        },
      ];
    });
  }

  function removeToCart(product: Product) {
    setCartItems((state) => {
      const newCartItems = state.map((item) => {
        if (item.product._id !== product._id) return item;

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      });

      return newCartItems.filter((item) => item.quantity > 0);
    });
  }

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} cancelOrder={handleCancelOrder} />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu addToCart={addToCart} />
        </MenuContainer>
      </Container>

      <TableModal
        onClose={closeModal}
        onSave={handleSaveTable}
        visible={isTableModalVisible}
      ></TableModal>

      <Footer
        cartItems={cartItems}
        buttonLabel="Confirmar pedido"
        hasTable={!!selectedTable}
        onPress={openModal}
        price={cartPrice}
        removeToCart={removeToCart}
        addToCart={addToCart}
      />
    </>
  );
};
