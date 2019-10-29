import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { Container, Form, Input, SubmitButton, List, User, Referencia, Name, Preco, Estoque, LogoTitle } from './styles';

// import { Container } from './styles';

export default class Main extends Component {
    state = {
      newUser: '',
      users: [],
      loading: false,
    }

    async componentDidMount() {
      const users = await AsyncStorage.getItem('users');
      if (users) {
        this.setState({ users: JSON.parse(users) });
      }
    }

    componentDidUpdate(_, prevState) {
      const { users } = this.state
      if (prevState.users !== users) {
         AsyncStorage.setItem('users', JSON.stringify(users));
      }
    }

    handleAddUser = async () => {
      const { users, newUser } = this.state;
      this.setState({ loading: true });
      // const response = await api.get(`/users/${newUser}`);
      const response = await fetch(`http://192.168.0.27:3333/produtos/${newUser}`);
      const commits = await response.json();
      const data = {
        produto: commits[0].Produto,
        referencia: commits[0].NumProduto,
        preco: commits[0].PrecoVenda,
        estoque: commits[0].QuantEstoque,
      };

       // console.tron.log(commits[0].Produto);

      this.setState({
        users: [ data ],
        newUser: '',
        loading: false,
      });

      Keyboard.dismiss();
    };

    render() {
      const { users, newUser, loading } = this.state;
      return (
        <Container>
          <Form>
            <Input
              autoCorrect={false}
              autoCapitalize="characters"
              placeholder="Digite o código do produto"
              value={newUser}
              onChangeText={text => this.setState({ newUser: text })}
              returnKeyType="send"
              onSubmitEditing={this.handleAddUser}
            />
            <SubmitButton loading={loading} onPress={this.handleAddUser}>
              { loading ? <ActivityIndicator color="#fff" /> : <Icon name="search" size={20} color="#eee" /> }

            </SubmitButton>
          </Form>

          <List
            data={users}
            keyExtractor={user => user.referencia}
            renderItem={({ item }) => (
              <User>
                <Referencia>Ref.: {item.referencia}</Referencia>
                <Name>{item.produto}</Name>
                <Preco>R$ {item.preco}</Preco>
                <Estoque>Estoque: {item.estoque}</Estoque>
              </User>
            )}
          />
        </Container>
      );

    }
}

Main.navigationOptions = {
  // title: 'Spazzio App',
  headerTitle: () => (
      <LogoTitle
          source={{
              uri:
                  'https://lojaspazzio.com.br/wp-content/uploads/2019/02/logo1.png',
          }}
      />
  ),
};
