import React from 'react'
import {View, Text, StyleSheet,Button, TextInput, Image} from 'react-native'
// import { TextInput } from 'react-native-gesture-handler';

const LoginScreen =({navigation})=>{
    return(
      <View style={styles.container}>
        <View style={styles.ImgContainer}>
            <Image style={{width:'100%', height:'100%'}}  source={require('../assets/images/logo.jpg')}/>
        </View>
        <Text style={styles.text}>Kirish</Text>
        <TextInput 
        label='Email'
        style={styles.input}
        />
         <TextInput 
        label='Email'
        style={styles.input}
        />
        <View style={styles.btnContainer}> 
            <Button title="A'zolik" onPress={()=>navigation.navigate('Register')}/>
            <Button title="Kirish" onPress={()=>navigation.navigate('Welcome')}/>
        </View>
      </View>
    );
  }
  const styles=StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      ImgContainer:{
        width:200,
        height:100,
      },
      text:{
        width:100,
        fontWeight:'bold',
        marginBottom:5,
        marginTop:5,
        textAlign:'center'
      },
    input:{
        width:200,
        height:44,
        padding:1,
        textAlign:'center',
        fontWeight:'bold',
        borderWidth:1,
        borderColor:'black',
        marginBottom:10,
        borderRadius:10,
        fontSize:25
      },
    btnContainer:{
        width:200,
        height:40,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    }

  })
  export default LoginScreen;