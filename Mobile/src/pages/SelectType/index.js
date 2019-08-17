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
  DetailButton,
  Title,
  CloseModalBtn,
  CloseModalBtnText,
} from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';
import Pizza from '../../assets/images/pizzas/1.png';
import DetailsModal from '../../utils/Animations/pizzaDetails';

const SelectSize = ({ navigation }) => {
  const [events, useEvents] = useState({
    isModalVisible: false,
    keys: [],
    keysInfo: [],
    pizzaData: [
      {
        key: 'Calabresa',
        details: 'Calabresa picada, Mussarela, Azeitona',
      },
      { key: 'mark' },
      { key: 'devan' },
      { key: 'batata' },
      { key: 'repolho' },
      { key: 'teste' },
      { key: 'arroz' },
      { key: 'feijão' },
    ],
    data: {},
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

  // Controle de showInfo com o modal das pizzas.
  const changeInfo = (data) => {
    const isSeted = events.keysInfo.find(keyItem => keyItem === data.key);
    if (isSeted) {
      const filtered = events.keysInfo.filter(item => item !== isSeted);

      useEvents({
        ...events,
        isModalVisible: false,
        keysInfo: filtered,
      });
    } else {
      useEvents({
        ...events,
        isModalVisible: true,
        data,
        keysInfo: [...events.keysInfo, data.key],
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
                <CloseModalBtn>
                  <CloseModalBtnText>X</CloseModalBtnText>
                </CloseModalBtn>
                <ItemBoxHeader>
                  {events.keys.find(keyItem => keyItem === item.key)
                    ? <Icon name="checkbox-marked-circle" size={27} color="#06E206" /> : null}
                </ItemBoxHeader>
                <PizzaImage source={Pizza} />
                <MoreDetailsBox>
                  <Title>
                    <ItemText>{item.key}</ItemText>
                  </Title>
                  <DetailButton onPress={() => changeInfo(item)}>
                    {events.keysInfo.find(keyItem => keyItem === item.key)
                      ? <Icon name="information" color="#E5293E" size={25} />
                      : <Icon name="information-outline" color="#E5293E" size={25} />}
                  </DetailButton>
                </MoreDetailsBox>
                {events.keysInfo.find(keyItem => keyItem === item.key)
                && (
                <DetailsModal
                  isVisible={events.isModalVisible}
                  detailData={events.data}
                  changeInfoIcon={changeInfo}
                />
                )}
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
