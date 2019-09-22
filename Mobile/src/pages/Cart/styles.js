import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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
  padding: 0px 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  `;


export const PageHeaderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  align-self: center;
  `;
export const TotalValueText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  `;

export const IconBox = styled.View`
  border-radius: 50;
  background: #E5293E;
  align-items: center;
  justify-content: center;
  padding: 5px;
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
  width: 370px;
  height: 120px;
  background-color: #fff;
  border-radius: 5px;
  padding: 14px;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
`;


export const PizzaImage = styled.Image`
  width: ${wp('20%')};
  height: ${hp('11%')};
`;

export const DetailsBox = styled.View`
  margin-left: 20px;
  `;

export const Title = styled.Text`
  color: #000;
  font-size: 15px;
  `;

export const SizeText = styled.Text`
  color: #000;
  font-size:14px;
  color: #999;
  `;

export const TextCost = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  `;

export const RemoveButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  `;


export const RemoveButton = styled.TouchableOpacity``;


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
