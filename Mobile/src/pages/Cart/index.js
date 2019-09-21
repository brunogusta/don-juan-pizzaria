import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {
  Container,
  BackgroundImage,
  PageHeader,
  PageHeaderText,
  TotalValueText,
  FlatlistContainer,
  ItemBox,
  Title,
  TextCost,
  Footer,
  SendOrderButton,
  SendOrdeText,
  MoreitemsButton,
  ContentContainer,
  PizzaImage,
  DetailsBox,
  SizeText,
  RemoveButton,
  RemoveButtonContainer,
}
  from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';
import api, { uri } from '../../services/api';

import { Types as orderActions } from '../../store/ducks/orders';
import { Types as costActions } from '../../store/ducks/totalValues';


const CheckOrder = ({ navigation }) => {
  const [cart, useCart] = useState({
    data: [],
  });

  const [cost, useCost] = useState({
    totalCost: '',
  });


  const dispatch = useDispatch();

  const {
    orders,
    totalValues,
    userLogin,
    userPreferences,
  } = useSelector(state => state);

  const { values } = totalValues;

  async function loadCartItens() {
    try {
      const { data } = await api.get('/cart');


      const cartItens = orders.pizzas.map((item) => {
        const filtered = {
          data: data.find(keyItem => keyItem.key === item),
        };
        return filtered;
      });

      const formatArray = cartItens.map(object => object.data);

      const pizzasOrder = formatArray.map((item) => {
        const newItem = {
          image: item.image,
          name: item.key,
          size: orders.sizes.pizzas,
          cost: item.value,
        };
        return newItem;
      });

      const toNumber = values.map((value) => {
        let number = value.replace(',', '.');
        number = parseFloat(number);

        return number;
      });

      const totalValue = toNumber.reduce((num1, num2) => num1 + num2);
      const fixed = totalValue.toFixed(2);

      const coinTransform = fixed.replace('.', ',');


      useCart({
        ...cart,
        data: [...pizzasOrder, ...orders.drinks],
      });

      useCost({
        ...cost,
        totalCost: coinTransform,
      });
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    loadCartItens();
  }, []);


  useEffect(() => {
    if (cost.totalCost === values[0] || cost.totalCost === 'NaN') {
      dispatch({
        type: costActions.RESET_VALUES,
      });

      useCost({
        totalCost: '0,00',
      });
    }
  }, [cost.totalCost]);


  const removeItem = (item) => {
    const filtered = cart.data.filter(data => data.key !== item.key);

    const haveCost = values.find(costItem => costItem === item.value);

    const costSeted = values.filter(card => card !== haveCost);

    const keys = filtered.map(pizza => pizza.key);


    let total = cost.totalCost.replace(',', '.');
    let itemCost = item.value.replace(',', '.');

    total = parseFloat(total);

    itemCost = parseFloat(itemCost);


    const totalValue = total - itemCost;
    const fixed = totalValue.toFixed(2);
    const coinTransform = fixed.replace('.', ',');

    useCost({
      ...cost,
      totalCost: coinTransform,
    });


    useCart({
      ...cart,
      data: filtered,
    });

    dispatch({
      type: orderActions.KEY_CHANGE,
      payload: {
        pizzas: keys,
      },

    });

    dispatch({
      type: costActions.CHANGE_VALUE,
      payload: costSeted,
    });
  };

  const sendOrder = async () => {
    const { userEmail, name } = userLogin.user;

    const formatedItems = cart.data.map((item) => {
      const newOrder = {
        image: item.image,
        name: item.name,
        size: item.size,
      };
      return newOrder;
    });


    const formated = {
      user: name,
      logradouro: userPreferences.data.logradouro,
      number: userPreferences.data.number,
      bairro: userPreferences.data.bairro,
      cep: userPreferences.data.cep,
      order: {
        totalCost: cost.totalCost,
        observations: userPreferences.data.observations,
        items: formatedItems,
      },
    };

    try {
      await api.post('/orders', { formated });

      await api.post('/orders/history', {
        user: userEmail,
        history: [
          { totalCost: cost.totalCost },
        ],
      });

      showMessage({
        message: 'Seu pedido foi enviado com sucesso!',
        type: 'success',
        backgroundColor: '#9DCA83',
      });

      navigation.navigate('Menu');
    } catch (err) {
      showMessage({
        message: 'Oh, não!...Algo deu errado!',
        type: 'error',
        backgroundColor: '#E5293E',
      });
    }

    dispatch({
      type: costActions.RESET_VALUES,
    });
    dispatch({
      type: orderActions.RESET_VALUES,
    });
  };

  return (
    <Container>
      <BackgroundImage source={HeaderImage} />
      <PageHeader>
        <PageHeaderText>Carrinho</PageHeaderText>
        <TotalValueText>{`R$ ${cost.totalCost}`}</TotalValueText>
      </PageHeader>
      <ContentContainer>
        <FlatlistContainer>
          <FlatList
            contentContainerStyle={style.flatList}
            data={cart.data}
            renderItem={({ item }) => (
              <ItemBox>
                <PizzaImage source={{
                  uri: `${uri}files/${item.image}`,
                }}
                />
                <DetailsBox>
                  <Title>{`${item.name}`}</Title>
                  <SizeText>{`Tamanho: ${item.size}`}</SizeText>
                  <TextCost>{`R$${item.cost}`}</TextCost>
                </DetailsBox>
                <RemoveButtonContainer>
                  <RemoveButton onPress={() => removeItem(item)}>
                    <IconMaterialC name="trash-can" size={27} color="#E5293E" />
                  </RemoveButton>
                </RemoveButtonContainer>
              </ItemBox>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.name.toString()}
          />
        </FlatlistContainer>
        <Footer>
          <MoreitemsButton onPress={() => navigation.navigate('Menu')}>
            <Icon name="add-shopping-cart" color="#666666" size={20} />
          </MoreitemsButton>
          <SendOrderButton onPress={sendOrder}>
            <SendOrdeText>Realizar Pedido</SendOrdeText>
            <Icon name="keyboard-arrow-right" size={27} color="#fff" />
          </SendOrderButton>
        </Footer>
      </ContentContainer>
    </Container>
  );
};


CheckOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CheckOrder;


const style = StyleSheet.create({
  flatList: {
    alignItems: 'center',
  },
});
