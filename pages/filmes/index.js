import react,{component} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

export default class filme extends component{
    render(){
        return(
            <View>
                <text>
                    Olha que Legal maninho
                </text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    nomefilme:{
        color:"White",
        fontSize: 20,
        fontWeight: 'italic'
        

    }
})