import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const Container = styled.View`
  flex: 1;
`;


export const BackgroundImage = styled.Image`
  position:absolute;
  height: 30%;
  width: 100%;
`;

export const PageHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;


export const PageHeaderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${hp('2.8%')};
  `;

export const ReturnButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const FlatlistContainer = styled.View`
  flex-grow: 1;
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
  flex-direction: row;
  justify-content: space-between;
`;
export const Details = styled.View`
  flex-direction: column;
  `;

export const RemoveOrderBtn = styled.TouchableOpacity``;

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
