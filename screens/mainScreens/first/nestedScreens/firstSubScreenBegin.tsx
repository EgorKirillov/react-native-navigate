import {Button, StyleSheet, Text, View} from "react-native";
import {useAppNavigation} from "../../../types";

export const FirstSubScreenBegin = () => {
  const navigation = useAppNavigation();
  
  return (
    <View>
    <Text style={{fontSize:50}}>--1--BEGIN</Text>
   <Button title="Go to -1-end--" onPress={() => navigation.navigate('First', {screen:'End'})}/>
   <Button title="Go to --2--" onPress={() => navigation.navigate('Second', {id: " JUMP from --1-begin-"})}/>
   <Button title="Back" onPress={() => {    navigation.goBack();  }}/>
  
  
  </View>
)
}