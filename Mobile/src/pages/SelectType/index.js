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
  CompleteOrderButton,
} from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';
import Pizza from '../../assets/images/pizzas/1.png';
import DetailsModal from '../../utils/Animations/pizzaDetails';

const SelectSize = ({ navigation }) => {
  const [events, useEvents] = useState({
    keys: [],
    pizzaData: [
      {
        title: 'Ingredientes:',
        key: 'Baiana',
        details: [{ key: 'Mussarela' }, { key: 'Calabresa' }, { key: 'Ovos' }, { key: 'Catupiry' }, { key: 'Cebola' }, { key: 'Molho de pimenta' }],
      },
      {
        title: 'A famosa calabresoca',
        key: 'Aliche',
        details: [{ key: 'Filés de aliche importado' }, { key: 'Calabresaa' }, { key: 'Ovos' }, { key: 'Molho de pimenta' }],
      },
      {
        title: 'A famosa calabresoca',
        key: 'Alho e Óleo',
        details: [{ key: 'Molho de tomate fresco' }, { key: 'Calabresa' }, { key: 'Ovos' }, { key: 'Molho de pimenta' }],
      },
      {
        title: 'A famosa calabresoca',
        key: 'Ao Funghi',
        details: [{ key: 'Presunto cozido picado' }, { key: 'Calabresa' }, { key: 'Ovos' }, { key: 'Molho de pimenta' }],
      },
      {
        title: 'A famosa calabresoca',
        key: 'Atum',
        details: [{ key: 'Azeitona' }, { key: 'Calabresa' }, { key: 'Ovos' }, { key: 'Molho de pimenta' }],
      },
      {
        title: 'A famosa calabresoca',
        key: 'Bauru',
        details: [{ key: 'Cobertura de catupiry' }, { key: 'Calabresa' }, { key: 'Ovos' }, { key: 'Molho de pimenta' }],
      },
      {
        title: 'A famosa calabresoca',
        key: 'Caipira',
        details: [{ key: 'Azeitona Preta' }, { key: 'Calabresa' }, { key: 'Ovos' }, { key: 'Molho de pimenta' }],
      },
      {
        title: 'A famosa calabresoca',
        key: 'Calabresa',
        details: [{ key: 'Cebola' }, { key: 'Calabresa' }, { key: 'Ovos' }, { key: 'Molho de pimenta' }],
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
                <PizzaImage source={Pizza} />
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
