import { useState } from "react";
import { Home } from "../Icons/Home";
import { Order } from "../Icons/Order";
import { Profile } from "../Icons/Profile";
import { Text } from "../Text";
import { Container, MenuItem } from "./styles";

export const FooterMenu: React.FC = () => {
  const [links, setLinks] = useState([
    { icon: Home, text: "Home", isActive: true },
    { icon: Order, text: "Pedidos", isActive: false },
    { icon: Profile, text: "Meu perfil", isActive: false },
  ]);
  return (
    <Container>
      {links.map((link) => {
        const Icon = link.icon;
        const color = link.isActive ? "#d73035" : "#666";
        return (
          <MenuItem key={link.text}>
            <Icon color={color} />
            <Text color={color} style={{ marginTop: 7 }}>
              {link.text}
            </Text>
          </MenuItem>
        );
      })}
    </Container>
  );
};
