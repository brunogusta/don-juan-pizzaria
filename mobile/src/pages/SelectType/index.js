import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';


import {
  Container,
  BackgroundImage,
  ItemBox,
  ItemText,
  FlatListHeight,
  SelectButton,
  PageHeader,
  PageHeaderText,
  ReturnButton,
  ItemBoxHeader,
  PizzaImage,
  MoreDetailsBox,
  Title,
  CompleteOrderButton,
  PizzaValue,
  ValueText,
} from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';
import DetailsModal from '../../utils/Animations/pizzaDetails';
import { Types as costActions } from '../../store/ducks/totalValues';
import { Types as orderActions } from '../../store/ducks/orders';

import api, { uri } from '../../services/api';

const SelectType = ({ navigation }) => {
  const [events, useEvents] = useState({
    pizzaData: [],
  });


  const { totalValues, orders } = useSelector(state => state);


  const dispatch = useDispatch();

  const nextPage = () => {
    navigation.navigate('CheckOrder');
  };


  async function loadPizzas() {
    try {
      const response = await api.get('/pizzas');

      const pizzas = response.data.map((item) => {
        const content = {
          key: item.key,
          cost: item.value,
          details: item.details.map((value) => {
            const ingredients = { key: value };
            return ingredients;
          }),
          image: item.image,
        };
        return content;
      });

      useEvents({
        ...events,
        pizzaData: pizzas,
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadPizzas();
  }, []);


  // Controle de select das pizzas.
  const setSelected = (item) => {
    const isSeted = orders.pizzas.find(keyItem => keyItem === item.key);
    const haveCost = totalValues.values.find(costItem => costItem === item.cost);

    if (isSeted) {
      const filtered = orders.pizzas.filter(card => card !== isSeted);
      const costSeted = totalValues.values.filter(card => card !== haveCost);

      dispatch({
        type: orderActions.KEY_CHANGE,
        payload: {
          pizzas: filtered,
        },
      });
      dispatch({
        type: costActions.CHANGE_VALUE,
        payload: costSeted,
      });
    } else {
      dispatch({
        type: orderActions.KEY_ADD,
        payload: {
          pizzas: item.key,
        },
      });

      dispatch({
        type: costActions.TYPE_VALUE,
        payload: item.cost,
      });
    }
  };

  return (
    <Container>
      <BackgroundImage source={HeaderImage} />
      <PageHeader>
        <ReturnButton onPress={() => navigation.navigate('SelectSize')}>
          <IconMaterial name="keyboard-arrow-left" size={27} color="#fff" />
          <PageHeaderText>Selecione a(s) Pizza(s)</PageHeaderText>
        </ReturnButton>
        {orders.pizzas.length !== 0
          ? (
            <CompleteOrderButton onPress={nextPage}>
              <PageHeaderText>Finalizar</PageHeaderText>
              <IconMaterial name="keyboard-arrow-right" size={27} color="#fff" />
            </CompleteOrderButton>
          )
          : null}
      </PageHeader>
      <FlatListHeight>
        <FlatList
          data={events.pizzaData}
          renderItem={({ item }) => (
            <SelectButton onPress={() => setSelected(item)}>
              <ItemBox>
                <ItemBoxHeader>
                  {orders.pizzas.find(keyItem => keyItem === item.key)
                    ? <Icon name="checkbox-marked-circle" size={27} color="#06E206" /> : null}
                </ItemBoxHeader>
                <PizzaImage source={{
                  uri: `${uri}files/${item.image}`,
                }}
                />
                <MoreDetailsBox>
                  <Title>
                    <ItemText>{item.key}</ItemText>
                  </Title>
                </MoreDetailsBox>
                <PizzaValue>
                  <ValueText> + R$ {item.cost}</ValueText>
                </PizzaValue>
                <DetailsModal value={item} />
              </ItemBox>
            </SelectButton>
          )}
          numColumns={2}
          // eslint-disable-next-line react-native/no-inline-styles
          columnWrapperStyle={{ justifyContent: 'center' }}
        />
      </FlatListHeight>
    </Container>
  );
};

SelectType.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default SelectType;
