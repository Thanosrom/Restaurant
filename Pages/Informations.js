//React
import React,{useEffect,useState,useContext} from 'react';
//CSS
import '../CSS/Informations.css';
//Other libs
import {
  Box,
  Heading,
  Text,
  Button
} from '@chakra-ui/react';

import { 
  useNavigate,
  useParams  
} from 'react-router-dom';
import { CartContext } from './CartProvider';

function Informations() {
  
  const { dishID } = useParams();
  const navigate = useNavigate();

  const [dishes, setDishes] = useState([]);
  const {cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    const apiUrl = 'http://IP:5000/Dishes';
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setDishes(data);
        console.log(data);
        console.log(dishID);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []); 

  const goBack= () => {
    navigate(`/`);
  }

  const currentDish = dishes[dishID] || {};
  const {
    name,
    description,
    price,
    image,
    ingredients,
    tags: { dietaryPreferences = [], allergens = [] } = {},
  } = currentDish;
  
  return (
    <div className='informationDiv'>
      <Box m='0.3rem' className='informationsBox'>
        <Heading size='lg' m='0.3rem' className='informationsText'>
          {name}
        </Heading>
        <Text m='0.3rem' className='informationsTextsControl'>{description}</Text>
        <Text m='0.3rem' className='informationsTextsControl'>Price: ${price ? price.toFixed(2) : ''}</Text>
        <Text m='0.3rem' className='informationsTextsControl'>
          <img src={image} alt={name} />
        </Text>
        <Text m='0.3rem' className='informationsTextsControl'>{ingredients ? ingredients.join(', ') : ''}</Text>
        <Text m='0.3rem' className='informationsTextsControl'> 
          Dietary Preferences: {dietaryPreferences.join(', ')}
        </Text>
        <Text m='0.3rem' className='informationsTextsControl'>Allergens: {allergens.join(',')}</Text>
        <Button
          colorScheme='green'
          onClick={() => addToCart(currentDish)}
          className='informationButton'
        >
          <Text className='informationButtonText'>
            Add {name} to Cart
          </Text>
        </Button>
        <Button
          colorScheme='blue'
          onClick={() => goBack()}
          className='informationButton'
        >
          <Text className='informationButtonText'>
            Go Back
          </Text>
        </Button>
      </Box>
    </div>
  );
}

export default Informations;
