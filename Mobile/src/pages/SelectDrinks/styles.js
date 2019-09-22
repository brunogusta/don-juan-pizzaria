import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
`;

export const PageHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
  padding: 20px;
  align-items: center;
`;
export const PageHeaderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  `;

export const CompleteOrderButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const BackgroundImage = styled.Image`
  position:absolute;
  height: 30%;
  width: 100%;
`;

export const FlatListHeight = styled.View`
   flex:1;
   width: 100%;
`;


export const ItemBox = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
})`
  flex-direction: column;
  width: ${wp('33%')};
  height: ${hp('25%')};
  background-color: #fff;
  border-radius: 5px;
  margin:0 5px;
  padding: 5px;
  margin-bottom: 15px;
`;


export const ItemBoxHeader = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  height: 27px;
`;
export const ImageBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const SizeText = styled.Text`
  margin-left: 3px;
  color: #ccc;
  font-weight: bold;
`;


export const PizzaImage = styled.Image`
  width: ${wp('12%')};
  height: ${hp('11%')};
  align-self: center;
`;

export const SelectButton = styled.TouchableNativeFeedback`
`;

export const ReturnButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const MoreDetailsBox = styled.View`
  flex-direction: column;
  margin-top: 10px;
`;

export const Title = styled.View`
  align-self: center;
`;

export const ItemText = styled.Text`
  font-family: Helvetica;
  color:#0b2031;
  font-weight:bold;
  font-size: ${hp('2.5%')};
`;


export const PizzaValue = styled.View`
  justify-content: center;
  flex-direction: row;
`;

export const ValueText = styled.Text`
  color: #ccc;
  font-weight: bold;
  align-self: center;
`;
