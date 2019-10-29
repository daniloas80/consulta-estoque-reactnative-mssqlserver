import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import './src/config/ReactotronConfig';

const axios = require('axios')

import {
  Container,
  List,
  Product,
  Produto
} from './styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    
  } 
  



  // fetchData = async () => {
  //   const { produtos } = this.state.data;
  //   // const response = await fetch('http://192.168.0.27:3333/produtos');
  //   // const produtos = await response.json();
  //   const response = await axios.get('http://192.168.0.27:3333/produtos');
    
  //   //console.log(response);
  //   console.tron.log("HELLo");

   
  //   const data = {
  //     NumProduto: response.data.NumProduto,
  //   };

  //   this.setState({
  //     produtos: [data],
  //   });
  // }; 
 
  state = {
    data: [],
  };

  fetchData = async () => {
    // const dados = await fetch('http://192.168.0.27:3333/produtos')
    //    .then(response => response.json())
    //    .then(data => this.setState({ data }));
    //    console.log(dados);
    const response = await fetch('http://192.168.0.27:3333/produtos');
       const produtos = await response.json();
       this.setState({data: produtos});
  }

  componentDidMount() {
    this.fetchData();
    // fetch('http://192.168.0.27:3333/produtos')
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));
    //const { prdoutos } = this.state;
    
    // fetch('http://192.168.0.27:3333/produtos').then(response => {
    //   this.setState({ produtos: response.data });
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })


    // console.tron.log(produtos);  
    // const data = {
    //   NumProduto = response.NumProduto,
    //   Produto = response.Produto,
    // };
    // this.setState({
    //   produtos: [data]
    // })
  }
  // async ComponentDidMount() {
  //    // this.fetchData();
  //    try {
  //     // console.tron.log("HELLo");
  //     const response = await fetch('http://192.168.0.27:3333/produtos');
  //     const produtos = await response.json();
  //     this.state({data: produtos.results});
  //    } catch (error) {
  //      console.log("Erro ao tentar buscar dados!", error);
  //    }
  // }

  render() {
    const { produtos } = this.state.data;

    return (
      <Container>
        
      

        <FlatList
          data = {this.state.data}
          // data={produtos}
          keySxtractor={produto => produtos.CodProduto}
          renderItem={({ item }) => (
            <Product>
              <Produto>{item.NumProduto}</Produto>
              <Produto>{item.Produto}</Produto>
              <Produto>R$ {item.PrecoVenda}</Produto>
              <Produto>Estoque: {item.QuantEstoque}</Produto>
            </Product>
          )}
        />
      </Container>
      
    );
  }
}

