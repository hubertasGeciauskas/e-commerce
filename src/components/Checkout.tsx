import { Modal, ModalBody, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useState } from "react";

interface ShoppingCartProps {
    isOpen: boolean;
  }

export function Checkout ({isOpen}: ShoppingCartProps) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <Modal isOpen={isOpen}  >
            <ModalOverlay/>

            <ModalHeader>

            </ModalHeader>

            <ModalBody>

            </ModalBody>

            <ModalFooter>

            </ModalFooter>
        </Modal>
        </>
    )
}