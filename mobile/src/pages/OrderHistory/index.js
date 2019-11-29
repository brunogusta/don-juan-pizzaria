/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {
  formatRelative, parseISO,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

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
  RemoveOrderBtn,
  Details,
}
  from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';
import api from '../../services/api';


const CheckOrder = ({ navigation }) => {
  const [history, useHistory] = useState({
    orders: [],
  });

  const { userLogin } = useSelector(state => state);


  const loadHistory = async () => {
    const { data } = await api.get(`/orders/userdata/${userLogin.user.userEmail}`);

    const orders = data[0];

    const formated = orders.history.map((item, i) => {
      const orderNumber = i + 1;
      const firstDate = parseISO(item.orderDate);


      const date = formatRelative(firstDate, new Date(), { locale: ptBR });

      const order = {
        key: item._id,
        order: orderNumber,
        date,
        cost: item.totalCost,
      };

      return order;
    });

    formated.reverse();
    useHistory({
      orders: formated,
    });
  };


  useEffect(() => {
    loadHistory();
  }, []);

  const removeOrder = async (key) => {
    await api.delete(`orders/history/${userLogin.user.userEmail}/${key}`);

    loadHistory();
  };


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
          <IconMaterial name="keyboard-arrow-left" size={27} color="#fff" />
          <PageHeaderText>Últimos pedidos</PageHeaderText>
        </ReturnButton>
      </PageHeader>
      <FlatlistContainer>
        <FlatList
          contentContainerStyle={style.flatList}
          data={history.orders}
          renderItem={({ item }) => (
            <ItemBox>
              <Details>
                <BoxText>{`Pedido #${item.order}`}</BoxText>
                <TextTime>{`${item.date}`}</TextTime>
                <TextCost>{`R$ ${item.cost}`}</TextCost>
              </Details>
              <RemoveOrderBtn onPress={() => removeOrder(item.key)}>
                <Icon name="close-circle" size={27} color="#E5293E" />
              </RemoveOrderBtn>
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
