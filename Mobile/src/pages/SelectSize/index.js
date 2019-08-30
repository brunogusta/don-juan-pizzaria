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

import api from '../../services/api';
import { Types as costActions } from '../../store/ducks/totalValues';

const SelectSize = ({ navigation }) => {
  const [sizes, useSizes] = useState({
    keys: [],
    sizeData: [],
  });


  const { totalValues } = useSelector(state => state);
  async function loadSizes() {
    const response = await api.get('/register/sizes').catch(err => console.log(err));
    console.log(response);

    const size = response.data.map((item) => {
      const content = {
        name: item.name,
        image: item.image,
        cost: item.cost,
      };
      return content;
    });


    useSizes({
      keys: totalValues.lastSize,
      sizeData: size,
    });
  }


  useEffect(() => {
    loadSizes();

    console.log(sizes.keys);
  }, []);


  const dispatch = useDispatch();
  const nextPage = (key) => {
    dispatch({
      type: costActions.SIZE_VALUE,
      payload: key.cost,
    });

    dispatch({
      type: costActions.LAST_SIZE,
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
                      uri: `http://10.10.10.4:3002/files/${item.image}`,
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
