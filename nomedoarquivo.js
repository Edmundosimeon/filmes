import React,{component} from 'react';
import { SafeAreaView,Text,StyleSheet,FlatList } from 'react-native';
import api from './src/services/api';
import filme from './pages/filmes/index'

export default class app extends component{
    constructor(props){
    super(props)
    this.state = {
        filmes: []
     }
    }   
 async componentDidMount(){
    const response = await api.get('/filmes');
    this.setState({
        filmes: response.data
    })
 }

 render(){
    return(
    <FlatList
    data={this.state.filmes}
    keyExtractor={item => item.id}
    renderItem={({item})=> <filme data={item}/>}
    />
    )
 }
}
 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'Blue'
    }
 })
