import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const Container = styled.View`
  flex: 1;
  padding: 20px 0px;
`;


export const BackgroundImage = styled.Image`
  position:absolute;
  height: 30%;
  width: 100%;
`;

export const PageHeader = styled.View`
  flex-direction: row;
  padding: 0px 20px;
  align-items: center;
  justify-content: space-between;
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

export const FormContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const NoteInput = styled.TextInput.attrs({
  textAlignVertical: 'top',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
})`
  background: #fff;
  border-radius: 8px;
  padding: 10px 10px;
  height: 140px;
`;

export const CepInput = styled.TextInput.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
})`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 10px;
`;


export const StreetLine = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;


export const StreetInput = styled.TextInput.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
})`
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  flex: 3;
  margin-right: 8px;
`;

export const NumberInput = styled.TextInput.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
})`
  background: #fff;
  border-radius: 8px;
  flex: 1;
  padding: 10px;
`;
export const NeighborhoodInput = styled.TextInput.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
})`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 10px;
`;

export const FinalizeBtn = styled.TouchableOpacity.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  elevation: 15,
})`
  background: #E5293E;
  font-size: 15px;
  width: 100px;
  border-radius: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  align-self: flex-end;
`;

export const FinalizeBtnText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
