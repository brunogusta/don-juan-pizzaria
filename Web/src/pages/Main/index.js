import React from 'react';

import {
  Container, Header, LogoBox, ContentContainer,
} from './styles';
import LogoImg from '../../images/logo@3x.png';

const Main = () => (
  <Container>
    <Header>
      <ContentContainer>
        <LogoBox>
          <img src={LogoImg} alt="logo" />
          <h1>Pizza Hut</h1>
        </LogoBox>
      </ContentContainer>
    </Header>
  </Container>
);

export default Main;
