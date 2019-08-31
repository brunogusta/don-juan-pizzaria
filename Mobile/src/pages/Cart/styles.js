import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  padding: 20px 0px;
`;


export const BackgroundImage = styled.Image`
  position:absolute;
  height: 30%;
  width: 100%;
`;

export const PageHeader = styled.View`
  padding: 0px 10px;
`;


export const PageHeaderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  `;

export const ReturnButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ContentContainer = styled.View`
  flex:1;
  justify-content: space-between;
`;

export const FlatlistContainer = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const ItemBox = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
})`
  width: 360px;
  height: 120px;
  background-color: #fff;
  border-radius: 5px;
  padding: 14px;
  margin-bottom: 15px;
  justify-content: center;
`;


export const BoxText = styled.Text`
  color: #000;
  font-size: 20px;
  `;
export const TextTime = styled.Text`
  color: #DDD;
  font-size: 16px;
  `;
export const TextCost = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  `;


export const Footer = styled.View`
  padding: 30px 20px 20px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  `;

export const SendOrderButton = styled.TouchableOpacity.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
})`
  background: #E5293E;
  font-size: 15px;
  border-radius: 20px;
  padding: 7px 4px 7px 8px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const SendOrdeText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-transform:uppercase;
  `;

export const MoreitemsButton = styled.TouchableOpacity`
  border-radius: 50;
  background: #ccc;
  padding: 10px;
`;
