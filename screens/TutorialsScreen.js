import React from 'react'
import {View, Text, StyleSheet,Button} from 'react-native'

function TutorialsScreen({navigation}){
    return(
      <View style={styles.container}>
        <Text>Tutorials here</Text>
        <Button title="Go to Profile"
        onPress={()=>navigation.navigate('Profile')}/>
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
  export default TutorialsScreen;