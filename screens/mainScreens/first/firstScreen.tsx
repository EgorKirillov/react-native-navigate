import {FirstPropsType, useAppNavigation} from "../../types";
import {Button, StyleSheet, Text, View} from "react-native";

export const FirstScreen = ({route}: FirstPropsType) => {
  const navigation = useAppNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50}}>--1--</Text>
      <Button title="Go to --Home--" onPress={() => navigation.navigate('Home')}/>
      <Button title="Go to --2--" onPress={() => navigation.navigate('Second', {id: " JUMP from --1--"})}/>
      
      <Button title="Back" onPress={() => {
        navigation.goBack();
      }}/>
    
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
