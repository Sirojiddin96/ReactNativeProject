import React from 'react'
import {View, Text, StyleSheet,Button} from 'react-native'

function ProfileScreen({navigation}){
    return(
      <View style={styles.container}>
        <Text>Profile here</Text>
        <Button title="Go back To Login"
        onPress={()=>navigation.popToTop('Login')}/>
      </View>
    );
  }
  const styles=StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  })
  export default ProfileScreen;