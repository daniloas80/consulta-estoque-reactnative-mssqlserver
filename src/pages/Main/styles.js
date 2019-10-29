import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #e5e5e5;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #c5c5c5;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 5px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #937a84;
  border-radius: 5px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;
export const Name = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: normal;
  margin-top: 15px;
  text-align: center;
`;
export const Referencia = styled.Text`
  font-size: 24px;
  color: #937a84;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
`;
export const Preco = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
`;
export const Estoque = styled.Text`
  font-size: 44px;
  color: #937a84;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 5px;
  background: #937a84;
  justify-content: center;
  align-items: center;
  height: 36px;
`;
export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
