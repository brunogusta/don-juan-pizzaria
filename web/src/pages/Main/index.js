import React, { useEffect, useState } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import io from 'socket.io-client';
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
  OrderDetails,
  AdressBox,
  RemoveOrder,
} from './styles';
import LogoImg from '../../images/logo@3x.png';

import { logout } from '../../services/auth';

const Main = () => {
  const [userOrder, useUserOrder] = useState({
    cards: [],
  });

  const LogOut = () => {
    logout();

    history.go('/');
  };

  const LoadOrders = (data) => {
    useUserOrder({
      cards: data,
    });
  };

  const SetData = async () => {
    try {
      const { data } = await api.get('/orders');

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
          logradouro: item.logradouro,
          number: item.number,
          cep: item.cep,
          bairro: item.bairro,
        };

        return newData;
      });

      formated.reverse();

      LoadOrders(formated);
    } catch (err) {
      console.log(err);
    }
  };

  const RemoveItem = async (id) => {
    try {
      await api.delete(`orders/remove/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const socket = io('http://localhost:3002');

    socket.on('order', () => {
      SetData();
    });

    socket.on('remove', () => {
      SetData();
    });
  });

  useEffect(() => {
    SetData();
  }, []);

  return (
    <Container>
      <Header>
        <LogoBox>
          <img src={LogoImg} alt="logo" />
          <h1>Don Juan</h1>
        </LogoBox>
        <UserBox>
          <UserDetail>
            <p>Bruno Gustavo</p>
            <button onClick={LogOut} type="button">
              Sair do app
            </button>
          </UserDetail>
          <Border />
          <IconBox>
            <i className="fas fa-shopping-bag" />
            {userOrder.cards.length !== 0 && <div />}
          </IconBox>
        </UserBox>
      </Header>
      {userOrder.cards.length === 0 ? (
        <>
          <NoOrders>
            <h1>Não há nenhum pedido.</h1>
          </NoOrders>
        </>
      ) : (
        <>
          <OrdersContainer>
            <h2>Últimos pedidos</h2>
            {userOrder.cards.map(item => (
              <OrderBox key={item.orderNumber}>
                <RemoveOrder>
                  <button type="button" onClick={() => RemoveItem(item.key)}>
                    <i className="fas fa-times" />
                  </button>
                </RemoveOrder>
                <HeaderBox>
                  <OrderDetails>
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
                  </OrderDetails>
                  <AdressBox>
                    <p>
Rua:
{' '}
{item.logradouro}
</p>
                    <p>
Núḿero:
{' '}
{item.number}
</p>
                    <p>
CEP:
{' '}
{item.cep}
</p>
                    <p>
Bairro:
{' '}
{item.bairro}
</p>
                  </AdressBox>
                </HeaderBox>
                <OrderItems>
                  {item.items.flat().map(item => (
                    <Item key={item.name}>
                      <div>
                        <img
                          src={`http://localhost:3002/files/${item.image}`}
                          alt="pizza"
                        />
                        <div>
                          <p> 
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
      )}
    </Container>
  );
};

export default Main;
