import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const ImageBackground = styled.ImageBackground`
  height: 30%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`;

export const TextHeader = styled.Text`
  color: #fff;
  font-size: ${hp('3.8%')};
  font-weight: bold;
`;

export const HistoryBtn = styled.TouchableOpacity``;

export const CartBtn = styled.TouchableOpacity`
  background-color: ${colors.red};
  padding: 5px;
  border-radius: 150px;
`;

export const Nav = styled.View`
  flex: 1;
  margin-top: 5px;
  padding: 0 20px;
`;

export const Navbtn = styled.TouchableNativeFeedback`
  width: 100%;
`;

export const NavItem = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
})`
  flex-direction: row;
  background: #fff;
  border-radius: 10px;
  padding: 7px 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const DescriptionContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const TypeImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 10px;
`;

export const NavText = styled.Text`
  font-size: 17px;
  font-weight: 600;
`;

export const Description = styled.Text`
  flex-direction: row;
  color: ${colors.regular};
  max-width: 230px;
  margin-bottom: 3px;
`;

export const Time = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Mins = styled.Text`
  color: ${colors.regular};
  margin-left: 3px;
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StarNumber = styled.Text`
  color: ${colors.yelow};
`;
