import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { Container, Form, Input, SubmitButton } from './styles';

// import { Container } from './styles';

export default class Main extends Component {
    state = {
      newUser: '',
      users: [],
    }

    handleAddUser = async () => {
      const { user, newUser } = this.state;

      const response = await api.get(`/users/${newUser}`);
    }

    render() {
      const { users, newUser } = this.state;
      return (
        <Container>
          <Form>
            <Input
              autoCorrect={false}
              autoCapitalize="characters"
              placeholder="Digite o código do produto"
              value={newUser}
              onChangeText={text => TouchList.setState({ newUser: text })}
              returnKeyType="send"
              onSubmitEditing={this.handleAddUser}
            />
            <SubmitButton onPress={this.handleAddUser}>
              <Icon name="search" size={20} color="#eee" />
            </SubmitButton>
          </Form>
        </Container>
      );

    }
}

Main.navigationOptions = {
  title: 'Spazzio App',
}
