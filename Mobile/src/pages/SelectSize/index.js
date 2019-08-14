import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {
  Container,
  ImageBackground,
  Header,
  TextHeader,
  BackBtn,
  SizeRow,
  SizeItem,
  Image,
  SizeText,
  SizePrice,
  SizeContainer,
  Footer,
  SyzeBtn,
} from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';
import Gigante from '../../assets/images/gigante.png';
import Grande from '../../assets/images/grande.png';
import Media from '../../assets/images/media.png';
import Pequena from '../../assets/images/pequena.png';

const SelectSize = ({ navigation }) => (
  <ImageBackground source={HeaderImage}>
    <Container>
      <BackBtn onPress={() => navigation.navigate('Menu')}>
        <Header>
          <Icon name="keyboard-arrow-left" size={27} color="#fff" />
          <TextHeader>Selecione um tamanho</TextHeader>
        </Header>
      </BackBtn>
      <SizeContainer>
        <SizeRow>
          <SyzeBtn>
            <SizeItem>
              <Image source={Gigante} />
              <Footer>
                <SizeText>Gigante</SizeText>
                <SizePrice>R$76,00</SizePrice>
              </Footer>
            </SizeItem>
          </SyzeBtn>
          <SyzeBtn>
            <SizeItem>
              <Image source={Grande} />
              <Footer>
                <SizeText>Grande</SizeText>
                <SizePrice>R$59,00</SizePrice>
              </Footer>
            </SizeItem>
          </SyzeBtn>
        </SizeRow>
        <SizeRow>
          <SyzeBtn>
            <SizeItem>
              <Image source={Media} />
              <Footer>
                <SizeText>Média</SizeText>
                <SizePrice>R$42,00</SizePrice>
              </Footer>
            </SizeItem>
          </SyzeBtn>
          <SyzeBtn>
            <SizeItem>
              <Image source={Pequena} />
              <Footer>
                <SizeText>Pequena</SizeText>
                <SizePrice>R$29,00</SizePrice>
              </Footer>
            </SizeItem>
          </SyzeBtn>
        </SizeRow>
      </SizeContainer>
    </Container>
  </ImageBackground>
);

SelectSize.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default SelectSize;
