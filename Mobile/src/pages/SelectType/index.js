import React, { useState } from 'react';
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
} from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';
import Pizza from '../../assets/images/pizzas/1.png';
import DetailsModal from '../../utils/Animations/pizzaDetails';

const SelectSize = ({ navigation }) => {
  const [events, useEvents] = useState({
    keys: [],
    pizzaData: [
      {
        title: 'A famosa calabresoca',
        key: 'Calabresa',
        details: 'Calabresa picada, Mussarela, Azeitona',
      },
      {
        key: 'Frango',
        details: 'Frango picado , Mussarela, Azeitona',
      },
      {
        key: 'Chocolate',
        details: 'Chocolate derretido, Mussarela, Azeitona',
      },
      {
        key: 'Palmito',
        details: 'Palmito picado, Mussarela, Azeitona',
      },
      {
        key: 'Palmito',
        details: 'Palmito picado, Mussarela, Azeitona',
      },
      {
        key: 'Palmito',
        details: 'Palmito picado, Mussarela, Azeitona',
      },
      {
        key: 'Palmito',
        details: 'Palmito picado, Mussarela, Azeitona',
      },
      {
        key: 'Palmito',
        details: 'Palmito picado, Mussarela, Azeitona',
      },

    ],
    data: {},
    onClose: '',
  });


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
                <PizzaImage source={Pizza} />
                <MoreDetailsBox>
                  <Title>
                    <ItemText>{item.key}</ItemText>
                  </Title>
                  <DetailsModal  value ={item}/>
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
