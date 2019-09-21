import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';


import {
  Container,
  ImageBackground,
  Header,
  TextHeader,
  BackBtn,
  FlatListHeight,
  SizeItemHeader,
  SyzeBtn,
  SizePrice,
  SizeText,
  Image,
  ImageContainer,
  SizeItem,
} from './styles';


import HeaderImage from '../../assets/images/header-background2x.png';

import api, { uri } from '../../services/api';
import { Types as costActions } from '../../store/ducks/totalValues';
import { Types as orderActions } from '../../store/ducks/orders';

const SelectSize = ({ navigation }) => {
  const [sizes, useSizes] = useState({
    keys: [],
    sizeData: [],
  });


  const { totalValues } = useSelector(state => state);
  async function loadSizes() {
    try {
      const response = await api.get('/pizzas/sizes');

      const size = response.data.map((item) => {
        const content = {
          name: item.name,
          image: item.image,
          cost: item.cost,
        };
        return content;
      });


      useSizes({
        keys: [totalValues.pizzaSize],
        sizeData: size,
      });
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    loadSizes();
    console.log(api);
  }, []);


  const dispatch = useDispatch();
  const nextPage = (key) => {
    const filtered = totalValues.values.filter(item => totalValues.values[0] !== item);

    const newSize = [key.cost, ...filtered];

    dispatch({
      type: costActions.SIZE_VALUE,
      payload: newSize,
    });

    dispatch({
      type: orderActions.SIZE_ADD,
      payload: key.name,
    });

    useSizes({
      ...sizes,
      cost: key.cost,
      keys: [key.name],
    });

    navigation.navigate('SelectType');
  };


  return (
    <Container>
      <ImageBackground source={HeaderImage} />
      <BackBtn onPress={() => navigation.navigate('Menu')}>
        <Header>
          <IconMaterial name="keyboard-arrow-left" size={27} color="#fff" />
          <TextHeader>Selecione um tamanho</TextHeader>
        </Header>
      </BackBtn>
      <FlatListHeight>
        <FlatList
          data={sizes.sizeData}
          renderItem={({ item }) => (
            <SyzeBtn onPress={() => nextPage(item)}>
              <SizeItem>
                <SizeItemHeader>
                  {sizes.keys.find(keyItem => keyItem === item.name)
                    ? <Icon name="checkbox-marked-circle" size={27} color="#06E206" /> : null}
                </SizeItemHeader>
                <ImageContainer>
                  <Image
                    size={item.name}
                    source={{
                      uri: `${uri}files/${item.image}`,
                    }}
                  />
                </ImageContainer>
                <SizeText>{item.name}</SizeText>
                <SizePrice>{item.cost}</SizePrice>
              </SizeItem>
            </SyzeBtn>
          )}
          keyExtractor={item => item.name.toString()}
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
