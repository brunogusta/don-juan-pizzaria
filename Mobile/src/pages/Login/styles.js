import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ImageBackground = styled.ImageBackground`
  flex:1;
`;

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 75px;
  height: 75px;
`;

export const Container = styled.View`
  flex: 1;
  background: ${colors.darkTransparent};
  align-items: stretch;
  justify-content: center;
  padding:  0 30px;
`;

export const Form = styled.View``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  background: ${colors.white};
  border-radius: 5px;
  letter-spacing: 0;
  height: 52px;
  padding: 0 10px;
  font-size: 16px;
  color: ${colors.darker};
  margin-top: 10px;
`;

export const BtnLogin = styled.TouchableOpacity`
  background: ${colors.red};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  border-radius: 5px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const LoginText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;
export const BtnRegister = styled.TouchableOpacity`
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const RegisterText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const TextError = styled.Text`
  color: ${colors.red};
  font-size: 15px;
  font-weight: bold;
`;
