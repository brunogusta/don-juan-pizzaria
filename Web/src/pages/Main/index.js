import React, { useEffect, useState } from 'react';
import {
  formatRelative, parseISO,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

import history from '../../routes/history';
import api from '../../services/api';

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
  OrderFooter,
  NoOrders,
} from './styles';
import LogoImg from '../../images/logo@3x.png';

import { logout } from '../../services/auth';

const Main = () => {
  const [userOrder, useUserOrder] = useState({
    cards: [],
  });

  const LogOut = () => {
    logout();

    history.push('/');
  };

  const LoadOrders = (data) => {
    useUserOrder({
      cards: data,
    });
  };

  useEffect(async () => {
    const { data } = await api.get('/orders').catch(err => console.log(err));

    const formated = data.map((item, index) => {
      const firstDate = parseISO(item.order.orderDate);


      const date = formatRelative(firstDate, new Date(), { locale: ptBR });


      const newData = {
        key: item._id,
        user: item.user,
        orderNumber: index + 1,
        orderDate: date,
        totalCost: item.order.totalCost,
        observations: item.order.observations,
        items: item.order.items,
      };

      return newData;
    });

    formated.reverse();

    console.log(formated);


    LoadOrders(formated);
  }, []);

  return (
    <Container>
      {userOrder.cards.length === 0
        ? (
          <>
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
                  {userOrder.cards.length !== 0 && <div />}
                </IconBox>
              </UserBox>
            </Header>
            <NoOrders>
              <h1>Não há nenhum pedido.</h1>
            </NoOrders>
          </>
        )
        : (
          <>
            <OrdersContainer>
              <h2>Últimos pedidos</h2>
              {userOrder.cards.map(item => (
                <OrderBox key={item.key}>
                  <HeaderBox>
                    <p>
                Pedido #
                      {item.orderNumber}
                      {' '}
                  -
                      {' '}
                      {item.user}
                    </p>
                    <p>{item.orderDate}</p>
                    <h3>
                R$
                      {item.totalCost}
                    </h3>
                  </HeaderBox>
                  <OrderItems>
                    {item.items.flat().map(item => (
                      <Item>
                        <div>
                          <img src={`http://localhost:3002/files/${item.image}`} alt="pizza" />
                          <div>
                            <p>
                        Pizza de
                              {' '}
                              {item.name}
                            </p>
                            <p>
                        Tamanho:
                              {' '}
                              {item.size}
                            </p>
                          </div>
                        </div>
                      </Item>
                    ))}
                  </OrderItems>
                  <OrderFooter>
                    <p>
                Observações:
                      {' '}
                      {item.observations}
                    </p>
                  </OrderFooter>
                </OrderBox>
              ))}
            </OrdersContainer>
          </>
        )
      }
    </Container>
  );
};


export default Main;
