import styled from 'styled-components';


export const Container = styled.div`
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background: #0b2031;
  justify-content: space-between;
  color: #fff;
  padding: 20px 40px 20px 200px;
`;


export const OrderBox = styled.div`
  width: 100%;
  margin-top: 20px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const RemoveOrder = styled.div`
  display:flex;
  justify-content: flex-end;
  width: 100%;
  padding: 5px;

  button {
    border: none;
    background: none;
    font-size: 18px;
    color: #0b2031
  }
`;


export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;


  p {
    font-size: 15px;
  }

  p:nth-child(2n) {
    color: #96949e;
    font-size: 14px;
    margin: 5px 0;
  }
`;

export const OrderDetails = styled.div`
  flex-direction: column;
  `;

export const AdressBox = styled.div`
  flex-direction: column;
  border-left: 1px solid #D3D3D3;
  width: 427px;
  padding-left: 10px;

  p {
    font-size: 13px;
    color: #96949e;
  }
  `;


export const LogoBox = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  min-width: 300px;

  img {
  vertical-align: middle;
  height: 50px;
  width: 50px;
  margin-right: 10px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 193px;
`;

export const Border = styled.div`
  border-right: 1px solid #696969;
  height: 32px;
  margin: 0 18px;
`;

export const UserDetail = styled.div`
  flex-direction: column;

  p {
    font-weight: bold;
  }

  button {
    border-style: none;
    background: none;
    color: #A9A9A9;

      &:hover {
        color: #D3D3D3
      }
  }
`;

export const IconBox = styled.div`
position:relative;
height: 37px;
width: 37px;
text-align: center;
line-height: 37px;
border-radius: 50%;
background:#e5293e;

font-size: 20px;


div {
  position: absolute;
  top: 0px;
  right:0px ;
  background: #ffc107;
  border-radius: 50%;
  height: 13px;
  width: 13px;
  z-index: 10;
}
`;


export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 100px auto;
  justify-content: space-between;
`;


export const OrderItems = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
  border-top:1px solid #D3D3D3;
  border-bottom: 1px solid #D3D3D3;
`;


export const Item = styled.div`
  display: inline-block;
  align-items: center;
  width: 290px;
  height: 100px;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
div {
  display: flex;
  align-items: left;


  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  img {
    height: 60px;
    width: 60px;
  }


  p {
    font-size: 15px;
  }

  p:nth-child(2n) {
    color: #96949e;
    font-size: 14px;
    margin: 5px 0;
  }
}
`;

export const OrderFooter = styled.div`
  height: 100%;
  padding-top: 20px;
  color: #96949e;
`;

export const NoOrders = styled.div`
  width: 400px;
  height:50px;
  color: #96949e;

  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  right: 0;

  margin: auto;
`;
