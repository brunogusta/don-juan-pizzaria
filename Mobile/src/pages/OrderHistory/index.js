import React, { useState } from 'react';
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
  BoxText,
  TextTime,
  TextCost,
}
  from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';


const CheckOrder = ({ navigation }) => {
  const [history] = useState({
    orders: [
      {
        key: '2213',
        order: '#1',
        date: 'Ontem às 17h',
        cost: 'R$ 42,00',
      },
      {
        key: '2223',
        order: '#1',
        date: 'Ontem às 17h',
        cost: 'R$ 42,00',
      },
      {
        key: '22133',
        order: '#1',
        date: 'Ontem às 17h',
        cost: 'R$ 42,00',
      },
      {
        key: '22413',
        order: '#1',
        date: 'Ontem às 17h',
        cost: 'R$ 42,00',
      },
      {
        key: '22213',
        order: '#1',
        date: 'Ontem às 17h',
        cost: 'R$ 42,00',
      },
      {
        key: '222413',
        order: '#1',
        date: 'Ontem às 17h',
        cost: 'R$ 42,00',
      },
    ],

  });

  const style = StyleSheet.create({
    flatList: {
      alignItems: 'center',
    },
  });

  return (
    <Container>
      <BackgroundImage source={HeaderImage} />
      <PageHeader>
        <ReturnButton onPress={() => navigation.navigate('Menu')}>
          <Icon name="keyboard-arrow-left" size={27} color="#fff" />
          <PageHeaderText>Últimos pedidos</PageHeaderText>
        </ReturnButton>
      </PageHeader>
      <FlatlistContainer>
        <FlatList
          contentContainerStyle={style.flatList}
          data={history.orders}
          renderItem={({ item }) => (
            <ItemBox>
              <BoxText>{`Pedido ${item.order}`}</BoxText>
              <TextTime>{item.date}</TextTime>
              <TextCost>{item.cost}</TextCost>
            </ItemBox>
          )}
          showsVerticalScrollIndicator={false}
        />
      </FlatlistContainer>
    </Container>
  );
};


CheckOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CheckOrder;
