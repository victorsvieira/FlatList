//IMPORTES TRADICIONAIS
import React from 'react';
import {Text, View, FlatList} from 'react-native';

//CRIAÇÃO DA TABELA DE DADOS "ESTILO JSON", SEMPRE COM ID DIFERENTE
const posts = [
  {
    id: '1',
    author: 'mary.silva.585',
    likes: '31',
    description: 'Foram mais 365 dias da minha história e sinto uma enorme gratidão por cada um deles.'
  },
  {
    id: '2',
    author: 'fulano.de.tal',
    likes: '66',
    description: 'Essa é apenas uma descrição de exemplo.'
  }
]

//CRIAÇÃO DA FUNÇÃO "RENDER ITEM", QUE VAI RENDEDRIZAR ESSES ITENS
//OBSERVE A PARTE: item: post, ISSO SIGNIFICA QUE EU TO CHAMANDO item COM O NOME DE post, OU SEJA,
//AQUELA PARTE PODERIA SER SIMPLESMENTE item, AÍ SÓ IRIA PRECISAR MUDAR EM BAIXO AS REFERÊNCIAS 
//PARA item.author, item.likes, ETC.
function renderItem({item: post}) {
  return(
      <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        {/*RETORNO O QUE EU QUERO DA TABELA DE DADOS*/}
          <Text>{post.author}</Text>
          <Text>{post.likes} likes</Text>
          <Text>{post.description}</Text>
      </View>
  );
}

export default function App(){
    return(
      //CHAMO A FLATLIST COM 3 PROPRIEDADES, data (BASE DE DADOS), keyExtractor (UMA ARROW FUNCTION QUE)
      //VAI RETORNAR ITEM POR ITEM PELO SEU ID, E A FUNÇÃO RENDER ITEM
      <FlatList 
          data={posts}
          keyExtractor= {(item) => {item.id}}
          renderItem={renderItem}
      />
    );
}