import React from 'react';
import history from '../../routes/history';

import {
  Container,
  Header,
  LogoBox,
  UserBox,
  UserDetail,
  IconBox,
  Border,
  OrdersContainer,
  OrderBox,
  HeaderBox,
  OrderItems,
  Item,
} from './styles';
import LogoImg from '../../images/logo@3x.png';
import ItemImage from '../../images/1.png';
import Coke from '../../images/coca-600x540.png';

import { logout } from '../../services/auth';

const Main = () => {
  const LogOut = () => {
    logout();

    history.push('/');
  };


  return (
    <Container>
      <Header>
        <LogoBox>
          <img src={LogoImg} alt="logo" />
          <h1>Pizza Hut</h1>
        </LogoBox>
        <UserBox>
          <UserDetail>
            <p>Bruno Gustavo</p>
            <button onClick={LogOut} type="button">Sair do app</button>
          </UserDetail>
          <Border />
          <IconBox>
            <i className="fas fa-shopping-bag" />
            <div />
          </IconBox>
        </UserBox>
      </Header>
      <OrdersContainer>
        <h2>Últimos pedidos</h2>
        <OrderBox>
          <HeaderBox>
            <p>Pedido #1 - Fernando Hashel</p>
            <p>há 2 segundos</p>
            <h3>R$42,00</h3>
          </HeaderBox>
          <OrderItems>
            <Item>
              <div>
                <img src={ItemImage} alt="pizza" />
                <div>
                  <p>Teste</p>
                  <p>Teste</p>
                </div>
              </div>
            </Item>
            <Item>
              <div>
                <img src={ItemImage} alt="pizza" />
                <div>
                  <p>Teste</p>
                  <p>Teste</p>
                </div>
              </div>
            </Item>
            <Item>
              <div>
                <img src={ItemImage} alt="pizza" />
                <div>
                  <p>Teste</p>
                  <p>Teste</p>
                </div>
              </div>
            </Item>
            <Item>
              <div>
                <img src={Coke} alt="pizza" />
                <div>
                  <p>Teste</p>
                  <p>Teste</p>
                </div>
              </div>
            </Item>
            <Item>
              <div>
                <img src={Coke} alt="pizza" />
                <div>
                  <p>Teste</p>
                  <p>Teste</p>
                </div>
              </div>
            </Item>
          </OrderItems>
        </OrderBox>
      </OrdersContainer>
    </Container>
  );
};


export default Main;
