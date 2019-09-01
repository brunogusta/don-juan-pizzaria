import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';


import {
  Container,
  BackgroundImage,
  PageHeader,
  PageHeaderText,
  ReturnButton,
  FlatlistContainer,
  ItemBox,
  Title,
  TextTime,
  TextCost,
  Footer,
  SendOrderButton,
  SendOrdeText,
  MoreitemsButton,
  ContentContainer,
  PizzaImage,
  DetailsBox,
  SizeText,
}
  from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';
import api from '../../services/api';


const CheckOrder = ({ navigation }) => {
  const [cart, useCart] = useState({
    data: [],
    totalCost: '',
  });


  const { userCart, totalValues } = useSelector(state => state);
  const { lastSize, values } = totalValues;
  const { pizzas } = userCart.itens;

  async function loadCartItens() {
    const { data } = await api.get('/cart').catch(err => console.log(err));


    const cartItens = pizzas.map((item) => {
      const filtered = {
        data: data.find(keyItem => keyItem.key === item),
      };


      return filtered;
    });

    const formatArray = cartItens.map(object => object.data);


    const toNumber = values.map((value) => {
      let number = value.replace('.', '');

      number = value.replace(',', '.');
      number = parseFloat(number);

      return number;
    });

    const totalValue = toNumber.reduce((num1, num2) => num1 + num2);
    const fixed = totalValue.toFixed(2);

    const coinTransform = fixed.replace('.', ',');

    useCart({
      ...cart,
      totalCost: coinTransform,
      data: [...formatArray],
    });
  }


  useEffect(() => {
    loadCartItens();
  }, []);


  return (
    <Container>
      <BackgroundImage source={HeaderImage} />
      <PageHeader>
        <ReturnButton onPress={() => navigation.navigate('CheckOrder')}>
          <Icon name="keyboard-arrow-left" size={27} color="#fff" />
          <PageHeaderText>Carrinho</PageHeaderText>
        </ReturnButton>
        <PageHeaderText>{`R$${cart.totalCost}`}</PageHeaderText>
      </PageHeader>
      <ContentContainer>
        <FlatlistContainer>
          <FlatList
            contentContainerStyle={style.flatList}
            data={cart.data}
            renderItem={({ item }) => (
              <ItemBox>
                <PizzaImage source={{
                  uri: `http://10.10.10.4:3002/files/${item.image}`,
                }}
                />
                <DetailsBox>
                  <Title>{`Pizza ${item.key}`}</Title>
                  <SizeText>{`Tamanho: ${lastSize}`}</SizeText>
                  <TextCost>{`R$${item.value}`}</TextCost>
                </DetailsBox>
              </ItemBox>
            )}
            showsVerticalScrollIndicator={false}
          />
        </FlatlistContainer>
        <Footer>
          <MoreitemsButton onPress={() => navigation.navigate('Menu')}>
            <Icon name="add-shopping-cart" color="#666666" size={20} />
          </MoreitemsButton>
          <SendOrderButton>
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
