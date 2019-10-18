import styled from 'styled-components';

import backgroundImage from '../../images/fundo.jpg';

export const Container = styled.body`
  background-image: linear-gradient(to top, black, transparent),
  url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;


export const FormContainer = styled.div`
width: 300px;
height: 300px;

position: absolute;
top:0;
bottom: 0;
left:0;
right: 0;

margin: auto;

justify-content: center;

input {
  width: 100%;
  padding: 10px;
  display: block;
  border: 0;
  border-radius: 7px;

  &:nth-child(2n){
    margin: 10px 0px;
  }
}

div {
  margin: 3px;
  color: #FA0018;
  font-weight: bold;
  font-size: 15px;
  height: 20px;
}

button {
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 7px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  background-color: #FA0018;
  margin-top: 15px;
  text-align: center;

  &:hover {
    box-shadow: 0px 9px 25px rgba(0, 0, 0, 0.7);
  }
}
`;

export const LogoImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 80px;
  width: 80px;
  margin-bottom: 20px;
`;
