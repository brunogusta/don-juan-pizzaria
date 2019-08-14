import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {
  ImageBackground,
  TextHeader,
  Header,
  HistoryBtn,
  CartBtn,
  Nav,
  NavItem,
  Title,
  DescriptionContainer,
  NavText,
  TypeImage,
  Navbtn,
  Description,
  Time,
  Mins,
  StarNumber,
} from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';
import PizzaFresca from '../../assets/images/pizza_fresca.jpg';
import Massas from '../../assets/images/massas.jpg';
import Refrigerante from '../../assets/images/refrigerante.png';
import Cerveja from '../../assets/images/cerveja.jpg';
import Calzones from '../../assets/images/calzones.webp';

const Menu = ({ navigation }) => (
  <ImageBackground source={HeaderImage}>
    <Header>
      <HistoryBtn>
        <Icon name="history" size={30} color="#fff" />
      </HistoryBtn>
      <TextHeader>Pizza Hut</TextHeader>
      <CartBtn>
        <Icon name="shopping" size={30} color="#fff" />
      </CartBtn>
    </Header>
    <Nav>
      <Navbtn onPress={() => navigation.navigate('SelectSize')}>
        <NavItem>
          <TypeImage source={PizzaFresca} />
          <DescriptionContainer>
            <Title>
              <NavText>Pizzas</NavText>
              <StarNumber>
                <Icon name="star" size={15} /> 5.0
              </StarNumber>
            </Title>
            <Description>
              Mais de 50 sabores de pizzas. Até 4 tamanhos diferentes de fome!
            </Description>
            <Time>
              <Icon name="alarm" size={20} color="#DDD" />
              <Mins>30 mins</Mins>
            </Time>
          </DescriptionContainer>
        </NavItem>
      </Navbtn>
      <Navbtn>
        <NavItem>
          <TypeImage source={Massas} />
          <DescriptionContainer>
            <Title>
              <NavText>Massas</NavText>
              <StarNumber>
                <Icon name="star" size={15} /> 4.5
              </StarNumber>
            </Title>
            <Description>Dez tipos de massas com diferentes molhos para te satisfazer.</Description>
            <Time>
              <Icon name="alarm" size={20} color="#DDD" />
              <Mins>25 mins</Mins>
            </Time>
          </DescriptionContainer>
        </NavItem>
      </Navbtn>
      <Navbtn>
        <NavItem>
          <TypeImage source={Calzones} />
          <DescriptionContainer>
            <Title>
              <NavText>Calzones</NavText>
              <StarNumber>
                <Icon name="star" size={15} /> 4.5
              </StarNumber>
            </Title>
            <Description>Calzones super recheados com mais de 50 sabores diferentes.</Description>
            <Time>
              <Icon name="alarm" size={20} color="#DDD" />
              <Mins>15 mins</Mins>
            </Time>
          </DescriptionContainer>
        </NavItem>
      </Navbtn>
      <Navbtn>
        <NavItem>
          <TypeImage source={Refrigerante} />
          <DescriptionContainer>
            <Title>
              <NavText>Bebidas não-alcóolicas</NavText>
              <StarNumber>
                <Icon name="star" size={15} /> 4.0
              </StarNumber>
            </Title>
            <Description>Refrigerantes, sucos, chá gelado, energético e água.</Description>
            <Time>
              <Icon name="alarm" size={20} color="#DDD" />
              <Mins>5 mins</Mins>
            </Time>
          </DescriptionContainer>
        </NavItem>
      </Navbtn>
      <Navbtn>
        <NavItem>
          <TypeImage source={Cerveja} />
          <DescriptionContainer>
            <Title>
              <NavText>Bebidas alcóolicas</NavText>
              <StarNumber>
                <Icon name="star" size={15} /> 4.0
              </StarNumber>
            </Title>
            <Description>Cervejas artesanais, vinhos, e destilados.</Description>
            <Time>
              <Icon name="alarm" size={20} color="#DDD" />
              <Mins>5 mins</Mins>
            </Time>
          </DescriptionContainer>
        </NavItem>
      </Navbtn>
    </Nav>
  </ImageBackground>
);

Menu.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Menu;
