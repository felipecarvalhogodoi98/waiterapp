import { Overlay, OrderModalBody, OrderModalDetails, Actions } from "./styles";

import { formatPrice } from "../../Utils/FormatPrice";

import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { useEffect } from "react";

interface OrderModalProps {
  isVisible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ isVisible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key == "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isVisible || !order) return null;

  const total = order.products.reduce(
    (accumulator, current) =>
      accumulator + current.product.price * current.quantity,
    0
  );

  return (
    <Overlay>
      <OrderModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="close" />
          </button>
        </header>

        <div className="status-contaier">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && "🕛"}
              {order.status === "IN_PRODUCTION" && "🧑‍🍳"}
              {order.status === "DONE" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && "Fila de espera"}
              {order.status === "IN_PRODUCTION" && "Em preparação"}
              {order.status === "DONE" && "Pronto!"}
            </strong>
          </div>
        </div>

        <OrderModalDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map((item) => (
              <div className="item" key={item._id}>
                <img
                  src={`http://localhost:3001/uploads/${item.product.imagePath}`}
                  alt={item.product.name}
                  width={56}
                  height={40}
                />
                <span className="quantity">{item.quantity}x</span>

                <div className="product-details">
                  <strong>{item.product.name}</strong>
                  <span>{formatPrice(item.product.price)}</span>
                </div>
              </div>
            ))}

            <div className="total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
          </div>
        </OrderModalDetails>

        <Actions>
          <button type="button" className="primary">
            <span>🧑‍🍳</span>
            <span>Iniciar producao</span>
          </button>

          <button type="button" className="secondary">
            Iniciar producao
          </button>
        </Actions>
      </OrderModalBody>
    </Overlay>
  );
}
