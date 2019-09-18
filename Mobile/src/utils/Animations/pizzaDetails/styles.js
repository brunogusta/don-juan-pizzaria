import styled from 'styled-components/native';


export const ContentDetail = styled.View`
  flex-direction: row;
`;

export const InfoButton = styled.TouchableOpacity.attrs({
  hitSlop: { bottom: 40, left: 10, right: 30 },
})`
  position: absolute;
  left: 140px;
  top: 150px;
`;

export const CloseBtn = styled.TouchableOpacity.attrs({
  hitSlop: { bottom: 30, left: 30 },
})`
  position: absolute;
  left: 150px;
  top:5px;
`;

export const CloseBtnText = styled.Text`
  color: #000;
`;

export const DetailsText = styled.Text`
  color: #EEE;
  font-size: 13;
  font-weight: bold;
  text-align: left;
  margin-left: 5px;
`;

export const Arrow = styled.Image`
  height: 20px;
  width: 20px;
`;

export const ContainerList = styled.View`
  height: 100px;
`;
