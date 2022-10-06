import {Button, StyleSheet, Text, View} from "react-native";
import {useAppNavigation} from "../../../types";

export const FirstSubScreenEnd = () => {
  const navigation = useAppNavigation();
  
  return (
    <View>
    <Text style={{fontSize:50}}>--1--END</Text>
      <Button title="Go to -1-begin--" onPress={() => navigation.navigate('First', {screen:'Begin'})}/>
      <Button title="Go to --2--" onPress={() => navigation.navigate('Second', {id: " JUMP from --1-end-"})}/>
      <Button title="Back" onPress={() => {    navigation.goBack();  }}/>
  
  
  </View>
)
}