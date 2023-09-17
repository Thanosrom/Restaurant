//React
import React, { useEffect, useState, useContext } from 'react';
//CSS
import '../CSS/Home.css';
//Other libs
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
  Text,
  Button,
  Card,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartProvider';
function Home() {

  const navigate = useNavigate();
  const [dishes, setDishes] = useState([]);
  const {cart, addToCart } = useContext(CartContext);

  //Filters
  const [vegetarianFreeFilter, setVegetarianFreeFilter] = useState(false);
  const [glutenFreeFilter, setGlutenFreeFilter] = useState(false);
  const [lactoseFreeFilter, setLactoseFreeFilter] = useState(false);
  const [spicesFreeFilter, setSpicesFreeFilter] = useState(false);

  const [containsNutsFilter, setContainsNutsFilter] = useState(false);
  const [containsGlutenFilter, setContainsGlutenFilter] = useState(false);
  const [lactoseFilter, setLactoseFilter] = useState(false);
  const [containsAllergensFilter, setContainsAllergensFilter] = useState(false);
  const [allergensFreeFilter, setAllergensFreeFilter] = useState(false);

  const [priceUnder10, setPriceUnder10] = useState(false);
  const [priceUnder20, setPriceUnder20] = useState(false);
  const [priceUnder30, setPriceUnder30] = useState(false);
  const [priceUnder40, setPriceUnder40] = useState(false);
  const [priceAbove40, setPriceAbove40] = useState(false);

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
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const showInfo = (dishID) => {
    navigate(`/informations/${dishID-1}`);
  };

  const goToCart = () => {
    navigate(`/order`);
  };

  const filteredDishes = dishes.filter((dish) => {
    if (vegetarianFreeFilter && !dish.tags?.dietaryPreferences?.includes('vegetarian')) {
      return false;
    }
    if (glutenFreeFilter && !dish.tags?.dietaryPreferences?.includes('gluten-free')) {
      return false;
    }
    if (lactoseFreeFilter && !dish.tags?.dietaryPreferences?.includes('lactose-free')) {
      return false;
    }
    if (spicesFreeFilter && !dish.tags?.dietaryPreferences?.includes('contains-nuts')) {
      return false;
    }


    if (containsNutsFilter && !dish.tags?.allergens?.includes('contains-nuts')) {
      return false;
    }
    if (containsGlutenFilter && !dish.tags?.allergens?.includes('contains-gluten')) {
      return false;
    }
    if (lactoseFilter && dish.tags?.dietaryPreferences?.includes('lactose-free')) {
      return false;
    }
    if (containsAllergensFilter && dish.tags?.allergens?.length === 0) {
      return false;
    }
    if (allergensFreeFilter && dish.tags?.allergens?.length > 0) {
      return false;
    }


    if (priceUnder10 && dish.price >= 10) {
      return false;
    }
    if (priceUnder20 && (dish.price < 10 || dish.price >= 20)) {
      return false;
    }
    if (priceUnder30 && (dish.price < 20 || dish.price >= 30)) {
      return false;
    }
    if (priceUnder40 && (dish.price < 30 || dish.price >= 40)) {
      return false;
    }
    if (priceAbove40 && dish.price < 40) {
      return false;
    }

    return true;
  });

  return (
    <div className='homeDiv'>
      <Heading m='2rem' color='white' className='homeHeading'>
        Yummy Greek Restaurant
      </Heading>

      <Box className='checkBoxGroupBox'>
        <Card m='2rem' padding='1rem' className='homeCard'>
          <CheckboxGroup colorScheme='green'>
            <Checkbox
              onChange={(e) => setVegetarianFreeFilter(e.target.checked)}
              isChecked={vegetarianFreeFilter}
            >
              <Text className='homeTextsControl'>Χορτοφαγικό</Text>
            </Checkbox>
            <Checkbox
              onChange={(e) => setGlutenFreeFilter(e.target.checked)}
              isChecked={glutenFreeFilter}
            >
              <Text className='homeTextsControl'>Χωρίς Γλουτένη</Text>
            </Checkbox>
            <Checkbox
              onChange={(e) => setLactoseFreeFilter(e.target.checked)}
              isChecked={lactoseFreeFilter}
            >
              <Text className='homeTextsControl'>Χωρίς Λακτόζη</Text>
            </Checkbox>
            <Checkbox
              onChange={(e) => setSpicesFreeFilter(e.target.checked)}
              isChecked={spicesFreeFilter}
            >
              <Text className='homeTextsControl'>Χωρίς καρυκέυματα</Text>
            </Checkbox>
          </CheckboxGroup>
        </Card>
        <Card m='2rem' padding='1rem'>
          <CheckboxGroup colorScheme='green'>
            <Checkbox
              onChange={(e) => setContainsNutsFilter(e.target.checked)}
              isChecked={containsNutsFilter}
            >
              <Text className='homeTextsControl'>Περιέχει Ξηρούς Καρπούς</Text>
            </Checkbox>
            <Checkbox
              onChange={(e) => setContainsGlutenFilter(e.target.checked)}
              isChecked={containsGlutenFilter}
            >
              <Text className='homeTextsControl'>Περιέχει Γλουτένη</Text>
            </Checkbox>
            <Checkbox
              onChange={(e) => setLactoseFilter(e.target.checked)}
              isChecked={lactoseFilter}
            >
              <Text className='homeTextsControl'>Περιέχει Λακτόζη</Text>
            </Checkbox>
            <Checkbox
              onChange={(e) => setContainsAllergensFilter(e.target.checked)}
              isChecked={containsAllergensFilter}
            >
              <Text className='homeTextsControl'>Περιέχει Άλλα Αλλεργιογόνα</Text>
            </Checkbox>
            <Checkbox
              onChange={(e) => setAllergensFreeFilter(e.target.checked)}
              isChecked={allergensFreeFilter}
            >
              <Text className='homeTextsControl'>Χωρίς Αλλεργιογόνα</Text>
            </Checkbox>
          </CheckboxGroup>
        </Card>
        <Card m='2rem' padding='1rem'>
          <CheckboxGroup colorScheme='green'>
            <Checkbox
              onChange={(e) => setPriceUnder10(e.target.checked)}
              isChecked={priceUnder10}
            >
              <Text className='homeTextsControl'>Κάτω από 10 €</Text>
            </Checkbox>
            <Checkbox
              onChange={(e) => setPriceUnder20(e.target.checked)}
              isChecked={priceUnder20}
            >
              <Text className='homeTextsControl'>10 € - 20€</Text>
            </Checkbox>
            <Checkbox
              onChange={(e) => setPriceUnder30(e.target.checked)}
              isChecked={priceUnder30}
            >
              <Text className='homeTextsControl'>20 € - 30€</Text>
            </Checkbox>
            <Checkbox
              onChange={(e) => setPriceUnder40(e.target.checked)}
              isChecked={priceUnder40}
            >
              <Text className='homeTextsControl'>30 € - 40€</Text>
            </Checkbox>
            <Checkbox
              onChange={(e) => setPriceAbove40(e.target.checked)}
              isChecked={priceAbove40}
            >
             <Text className='homeTextsControl'>Άνω των 40 €</Text>
            </Checkbox>
          </CheckboxGroup>
        </Card>
      </Box>

      <Box className='dishesBox'>
        {filteredDishes.map((dish) => (
          <Card key={dish.id} m='1rem' padding='1rem'>
            <Text className='homeDishesName'>{dish.name}</Text>
            <Button
              mt='1rem'
              colorScheme='green'
              onClick={() => showInfo(dish.id)}
              className='homeDishButtons'
            >
              Go to additional Info
            </Button>
            <Button
              mt='1rem'
              colorScheme='blue'
              onClick={() => addToCart(dish)}
              className='homeDishButtons'
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </Box>

      <Box>
        <Button
          mt='1rem'
          colorScheme='blue'
          onClick={() => goToCart()}
        >
          Go to Cart
        </Button>
      </Box>
    </div>
  );
}

export default Home;
