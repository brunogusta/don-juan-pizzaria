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
import { Types as costActions } from '../../store/ducks/totalValues';
import { Types as orderActions } from '../../store/ducks/orders';

import api, { uri } from '../../services/api';

const SelectDrinks = ({ navigation }) => {
  const [drinks, useDrinks] = useState({
    items: [],
    size: '',
  });


  const { totalValues, orders } = useSelector(state => state);


  const dispatch = useDispatch();


  async function loadDrinks() {
    try {
      const response = await api.get('/drinks');

      const sizeType = response.data.map((item) => {
        const size = item.sizes[0];

        return size.name;
      });


      const formated = response.data.map((item) => {
        const content = {
          name: item.name,
          cost: item.value,
          image: item.image,
          size: sizeType[0],
        };
        return content;
      });


      useDrinks({
        ...drinks,
        items: formated,
        size: sizeType[0],
      });
    } catch (err) {
      console.log(err);
    }
  }

  const nextPage = () => {
    dispatch({
      type: orderActions.SIZE_ADD_DRINK,
      payload: drinks.size,

    });

    navigation.navigate('CheckOrder');
  };

  useEffect(() => {
    loadDrinks();
  }, []);


  // Controle de select dos drinks.
  const setSelected = (item) => {
    const isSeted = orders.drinks.find(keyItem => keyItem.name === item.name);
    const haveCost = totalValues.values.find(costItem => costItem === item.cost);

    if (isSeted) {
      const filtered = orders.drinks.filter(card => card !== isSeted);
      const costSeted = totalValues.values.filter(card => card !== haveCost);

      dispatch({
        type: orderActions.KEY_CHANGE_DRINK,
        payload: {
          drinks: filtered,
        },
      });
      dispatch({
        type: costActions.CHANGE_VALUE,
        payload: costSeted,
      });
    } else {
      dispatch({
        type: orderActions.KEY_ADD_DRINK,
        payload: {
          drinks: drinks.items,
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
        <ReturnButton onPress={() => navigation.navigate('Menu')}>
          <IconMaterial name="keyboard-arrow-left" size={27} color="#fff" />
          <PageHeaderText>Selecione a Bebida</PageHeaderText>
        </ReturnButton>
        {orders.drinks.length !== 0
          ? (
            <CompleteOrderButton onPress={nextPage}>
              <PageHeaderText>Finalizar Pedido</PageHeaderText>
              <IconMaterial name="keyboard-arrow-right" size={27} color="#fff" />
            </CompleteOrderButton>
          )
          : null}
      </PageHeader>
      <FlatListHeight>
        <FlatList
          data={drinks.items}
          renderItem={({ item }) => (
            <SelectButton onPress={() => setSelected(item)}>
              <ItemBox>
                <ItemBoxHeader>
                  {orders.drinks.find(keyItem => keyItem.name === item.name)
                    ? <Icon name="checkbox-marked-circle" size={27} color="#06E206" /> : null}
                </ItemBoxHeader>
                <PizzaImage source={{
                  uri: `${uri}files/${item.image}`,
                }}
                />
                <MoreDetailsBox>
                  <Title>
                    <ItemText>{item.name}</ItemText>
                  </Title>
                </MoreDetailsBox>
                <PizzaValue>
                  <ValueText>R$ {item.cost}</ValueText>
                </PizzaValue>
              </ItemBox>
            </SelectButton>
          )}
          numColumns={2}
          // eslint-disable-next-line react-native/no-inline-styles
          columnWrapperStyle={{ justifyContent: 'center' }}
          keyExtractor={item => item.name.toString()}
        />
      </FlatListHeight>
    </Container>
  );
};

SelectDrinks.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default SelectDrinks;
