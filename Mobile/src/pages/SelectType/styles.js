import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
`;

export const PageHeader = styled.View`
  flex-direction: row;
  z-index: 1;
  padding: 20px;
  align-items: center;
`
export const PageHeaderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  `

export const BackgroundImage = styled.Image`
  position:absolute;
  height: 190px;
  width: 100%;
`;

export const FlatListHeight = styled.View`
   flex:1;
   width: 100%;
`


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
  padding: 15px;
  margin-bottom: 15px;
`;


export const ItemBoxHeader = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  height: 27px;
`
export const PizzaImage = styled.Image`
  height: 120px;
  width: 120px;
  align-self: center;
`
export const ItemText = styled.Text`
  font-family: Helvetica;
  color:#0b2031;
  font-weight:bold;
  font-size: 16px;
  align-self: center;
`

export const SelectButton = styled.TouchableNativeFeedback`
`

export const ReturnButton = styled.TouchableOpacity`
  flex-direction: row;
`

export const MoreDetailsBox = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
`

export const Title =styled.View`
  flex-direction: row;
  justify-content: center;
`

export const DetailButton = styled.TouchableOpacity`
  flex-direction: row;
  position: absolute;
  left: 130px;
`
