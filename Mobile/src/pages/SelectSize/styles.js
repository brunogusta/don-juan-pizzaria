import styled from 'styled-components/native';


export const ImageBackground = styled.ImageBackground`
  position: absolute;
  height: 30%;
  width: 100%;
`;

export const Container = styled.View`
  flex:1;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
  padding: 20px;
  align-items: center;
`;

export const TextHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-left: 5px;
`;

export const BackBtn = styled.TouchableOpacity``;

export const FlatListHeight = styled.View`
  flex: 1;
`;

export const SizeItem = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
})`
  flex-direction: column;
  width: 180px;
  height: 220px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin: 0 10px;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ImageContainer = styled.View`
  height: 110;
`;

export const Image = styled.Image`
  align-self: center;
  height:${(props) => {
    switch (props.size) {
      case 'Pequena':
        return 50;
      case 'Média':
        return 70;
      case 'Grande':
        return 90;
      case 'Gigante':
        return 110;
      default:
        return null;
    }
  }};
  width: ${(props) => {
    switch (props.size) {
      case 'Pequena':
        return 50;
      case 'Média':
        return 72;
      case 'Grande':
        return 90;
      case 'Gigante':
        return 113;
      default:
        return null;
    }
  }};
`;


export const SizeText = styled.Text`
  align-self: center;
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const SizeItemHeader = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  height: 27px;
`;

export const SizePrice = styled.Text`
  align-self: center;
  font-size: 18px;
  color: #ccc;
`;

export const SyzeBtn = styled.TouchableNativeFeedback``;
