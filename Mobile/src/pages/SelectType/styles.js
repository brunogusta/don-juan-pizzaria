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
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ItemBoxHeader = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`
export const ItemText = styled.Text`
  color: black;
  align-self: center;
`

export const SelectButton = styled.TouchableNativeFeedback`
`

export const ReturnButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
