import React from 'react';

import {
  Container,
  BackgroundImage,
}
  from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';


const CheckOrder = () => (
  <Container>
    <BackgroundImage source={HeaderImage} />
  </Container>
);

export default CheckOrder;
