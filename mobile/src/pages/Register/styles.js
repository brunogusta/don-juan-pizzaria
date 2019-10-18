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
  width: 65px;
  height: 65px;
`;

export const Container = styled.View`
  flex: 1;
  background: ${colors.darkTransparent};
  align-items: stretch;
  justify-content: center;
  padding: 30px;
`;

export const Form = styled.View``;


export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  background: ${colors.white};
  border-radius: 5px;
  letter-spacing: 0;
  height: 48px;
  padding: 0 10px;
  font-size: 16px;
  color: ${colors.darker};
  margin-top: 10px;
`;

export const BtnRegister = styled.TouchableOpacity`
  border-radius: 5px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const RegisterText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const BtnRegisterSubmit = styled.TouchableOpacity`
  background: ${colors.red};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  border-radius: 5px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const BtnRegisterSubmitText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const BtnReturnToLogin = styled.TouchableOpacity`
  align-items: center;
  margin-top: 10px;
`;

export const BtnReturnToLoginText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const TextError = styled.Text`
  color: ${colors.red};
  font-size: 15px;
  font-weight: bold;
`;
