import styled from 'styled-components/native';

export const ImageBackground = styled.ImageBackground`
  padding: 30px 10px;
  height: 30%;
`;

export const Container = styled.View`
  height: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const TextHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-left: 5px;
`;

export const BackBtn = styled.TouchableOpacity``;

export const SizeContainer = styled.View`
  flex: 1;
`;

export const SizeRow = styled.View`
  flex-direction: row;
`;

export const SizeItem = styled.View.attrs({
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
  align-items: center;
  width: 180px;
  height: 220px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin: 0 10px;
  justify-content: space-between;

  margin-bottom: 15px;
`;

export const Image = styled.Image``;

export const SizeText = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const SizePrice = styled.Text`
  font-size: 18px;
  color: #ccc;
`;

export const SyzeBtn = styled.TouchableNativeFeedback``;

export const Footer = styled.View`
  align-items: center;
`;
