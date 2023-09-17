//React
import React,{useEffect,useState,useContext} from 'react';
//CSS
import '../CSS/Order.css';
//Other libs
import {
  Box,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';

import { 
  useNavigate,
} from 'react-router-dom';

import { CartContext } from './CartProvider';

function Order() {

  const {cart, addToCart } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const goBack= () => {
    navigate(`/`);
  }

  return (

    <div className='orderDiv'>

      <Box m='0.3rem' className='orderBox'>
        <Heading size='lg' m='0.3rem' className='orderText'>Cart</Heading>
          {cart.map((item, index) => (
            <Text key={index}>
              {item.name} - Price: ${item.price}
            </Text>
          ))}
        <Button
          m='0.3rem'
          colorScheme='green'
          onClick={() => goBack()}
          size='md'
          className='orderButton'
        >
          <Text className='orderButtonText'>
            Go Back
          </Text>
        </Button>

        <Button
          m='0.3rem'
          colorScheme='blue'
          onClick={() => {
            if (cart.length > 0) {
              onOpen();
            } else {
              alert("Cannot confirm order. Cart is empty.");
            }
          }}          
          size='md'
          className='orderButton'
        >
          <Text className='orderButtonText'>
            Confirm Order
          </Text>
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent>

          <ModalHeader>
            Order
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
           <Text>Your order has been confirmed</Text>
          </ModalBody>

          <ModalFooter className='orderModal'>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>

        </ModalContent>
      </Modal>

    </div>  
  );
}

export default Order;
