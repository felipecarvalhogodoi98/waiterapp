import { TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Container, Content, OrderHeader, Table } from "./styles";

interface HeaderProps {
  selectedTable: string;
  cancelOrder: () => void;
}

export function Header({ selectedTable, cancelOrder }: HeaderProps) {
  if (!selectedTable)
    return (
      <Container>
        <Text size={14} opacity={0.9}>
          Bem vindo(a) ao
        </Text>
        <Text size={24} weight="700">
          WAITER
          <Text size={24}>APP</Text>
        </Text>
      </Container>
    );

  return (
    <Container>
      <Content>
        <OrderHeader>
          <Text size={24} weight="600">
            Pedido
          </Text>
          <TouchableOpacity onPress={cancelOrder}>
            <Text color="#d73035" weight="600">
              cancelar pedido
            </Text>
          </TouchableOpacity>
        </OrderHeader>

        <Table>
          <Text weight="400" color="#666">
            Mesa {selectedTable}
          </Text>
        </Table>
      </Content>
    </Container>
  );
}
