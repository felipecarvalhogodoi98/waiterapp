import { Order } from "../../types/Order";
import { OrderBoard } from "../OrderBoard/OrderBoard";
import { Container } from "./styles";

const orders: Array<Order> = [
  {
    _id: "1",
    table: "1",
    status: "IN_PRODUCTION",
    products: [
      {
        _id: "1",
        quantity: 1,
        product: {
          _id: "1",
          name: "Pizza",
          imagePath: "1668473235597-quatro-queijos.png",
          price: 22.7,
        },
      },
      {
        _id: "1",
        quantity: 1,
        product: {
          _id: "1",
          name: "Pizza",
          imagePath: "1668473235597-quatro-queijos.png",
          price: 22.7,
        },
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrderBoard icon="🕛" title="Fila de espera" orders={orders} />
      <OrderBoard icon="🧑‍🍳" title="Em preparação" orders={[]} />
      <OrderBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
