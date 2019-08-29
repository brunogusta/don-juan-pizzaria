import React, { useState, useEffect } from 'react';
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
} from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';
import DetailsModal from '../../utils/Animations/pizzaDetails';

import api from '../../services/api';

const SelectSize = ({ navigation }) => {
  const [events, useEvents] = useState({
    keys: [],
    pizzaData: [],
  });


  async function loadPizzas() {
    const response = await api.get('/register').catch(err => console.log(err));
    console.log(response);

    const pizzas = response.data.map((item) => {
      const content = {
        title: item.title,
        key: item.key,
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
  }

  useEffect(() => {
    loadPizzas();
  }, []);

  // Controle de select das pizzas.
  const setSelected = (key) => {
    const isSeted = events.keys.find(keyItem => keyItem === key);

    if (isSeted) {
      const filtered = events.keys.filter(item => item !== isSeted);

      useEvents({
        ...events,
        keys: filtered,
      });
    } else {
      useEvents({
        ...events,
        keys: [...events.keys, key],
      });
    }
  };

  return (
    <Container>
      <BackgroundImage source={HeaderImage} />
      <PageHeader>
        <ReturnButton onPress={() => navigation.navigate('SelectSize')}>
          <IconMaterial name="keyboard-arrow-left" size={27} color="#fff" />
          <PageHeaderText>Selecione a Pizza</PageHeaderText>
        </ReturnButton>
        {events.keys.length !== 0
          ? (
            <CompleteOrderButton onPress={() => navigation.navigate('CheckOrder')}>
              <PageHeaderText>Finalizar Pedido</PageHeaderText>
              <IconMaterial name="keyboard-arrow-right" size={27} color="#fff" />
            </CompleteOrderButton>
          )
          : null}
      </PageHeader>
      <FlatListHeight>
        <FlatList
          data={events.pizzaData}
          renderItem={({ item }) => (
            <SelectButton onPress={() => setSelected(item.key)}>
              <ItemBox>
                <ItemBoxHeader>
                  {events.keys.find(keyItem => keyItem === item.key)
                    ? <Icon name="checkbox-marked-circle" size={27} color="#06E206" /> : null}
                </ItemBoxHeader>
                <PizzaImage source={{
                  uri: `http://10.10.10.4:3002/files/${item.image}`,
                }}
                />
                <MoreDetailsBox>
                  <Title>
                    <ItemText>{item.key}</ItemText>
                  </Title>
                  <DetailsModal value={item} />
                </MoreDetailsBox>
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

SelectSize.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default SelectSize;
