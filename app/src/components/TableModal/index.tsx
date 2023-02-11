import { useState } from "react";
import { Modal, TouchableOpacity, Platform } from "react-native";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { ModalBody, Overlay, ModalForm, ModalHeader, Input } from "./styles";

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState("");

  function handleSave(table: string) {
    onSave(table);
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <ModalHeader>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </ModalHeader>

          <ModalForm>
            <Input
              keyboardType="number-pad"
              placeholder="Numero da mesa"
              placeholderTextColor="#666"
              onChangeText={setTable}
            />
            <Button disabled={table === ""} onPress={() => handleSave(table)}>
              Salvar
            </Button>
          </ModalForm>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
