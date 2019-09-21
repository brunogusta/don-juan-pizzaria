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
  width: 180px;
  height: 220px;
  background-color: #fff;
  border-radius: 5px;
  margin:0 5px;
  padding: 10px;
  margin-bottom: 15px;
`;


export const ItemBoxHeader = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  height: 27px;
`;
export const PizzaImage = styled.Image`
  height: 47%;
  width: 60%;
  align-self: center;
`;
export const ItemText = styled.Text`
  font-family: Helvetica;
  color:#0b2031;
  font-weight:bold;
  font-size: 14px;
  align-self: center;
`;

export const SelectButton = styled.TouchableNativeFeedback`
`;

export const ReturnButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const MoreDetailsBox = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const DetailButton = styled.TouchableOpacity.attrs({
  hitSlop: { bottom: 40, left: 10, right: 30 },
})`
  flex-direction: row;
  position: absolute;
  left: 130px;
`;

export const PizzaValue = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 7px;
`;

export const ValueText = styled.Text`
  color: #ccc;
  font-weight: bold;
`;


// ANIMATION

export const ContentDetail = styled.View`
  flex-direction: row;
`;

export const CloseBtn = styled.TouchableOpacity`
  background: #ccc;
`;


export const CloseBtnText = styled.Text`
  color: #000;
`;
