import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board as BoardContainer, OrderContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Array<Order>;
}

export function OrderBoard({ icon, title, orders }: OrdersBoardProps) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenOrder(order: Order) {
    setModalIsVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseOrder() {
    setModalIsVisible(false);
    setSelectedOrder(null);
  }

  return (
    <BoardContainer>
      <OrderModal
        isVisible={modalIsVisible}
        onClose={handleCloseOrder}
        order={selectedOrder}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      <OrderContainer>
        {!!orders.length &&
          orders.map((order) => (
            <button
              key={order._id}
              onClick={() => handleOpenOrder(order)}
              type="button"
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} Itens</span>
            </button>
          ))}
      </OrderContainer>
    </BoardContainer>
  );
}
