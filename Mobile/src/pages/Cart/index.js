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
import api from '../../services/api';

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

  const { lastSize, values } = totalValues;

  async function loadCartItens() {
    const { data } = await api.get('/cart').catch(err => console.log(err));


    const cartItens = orders.pizzas.map((item) => {
      const filtered = {
        data: data.find(keyItem => keyItem.key === item),
      };
      return filtered;
    });

    const formatArray = cartItens.map(object => object.data);

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
      data: [...formatArray],
    });

    useCost({
      ...cost,
      totalCost: coinTransform,
    });
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

    api.post('/orders/history', {
      user: userEmail,
      history: [
        { totalCost: cost.totalCost },
      ],
    });


    const formatedItems = cart.data.map((item) => {
      const newOrder = {
        image: item.image,
        name: item.key,
        size: lastSize[0],
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
      await api.post('/orders', { formated }).then(resp => console.log(resp));

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
                  uri: `http://10.10.10.6:3002/files/${item.image}`,
                }}
                />
                <DetailsBox>
                  <Title>{`Pizza ${item.key}`}</Title>
                  <SizeText>{`Tamanho: ${lastSize}`}</SizeText>
                  <TextCost>{`R$${item.value}`}</TextCost>
                </DetailsBox>
                <RemoveButtonContainer>
                  <RemoveButton onPress={() => removeItem(item)}>
                    <IconMaterialC name="trash-can" size={27} color="#E5293E" />
                  </RemoveButton>
                </RemoveButtonContainer>
              </ItemBox>
            )}
            showsVerticalScrollIndicator={false}
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
