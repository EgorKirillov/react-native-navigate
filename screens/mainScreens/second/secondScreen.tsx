import {SecondScreenRouteProp, useAppNavigation} from "../../types";
import {useRoute} from "@react-navigation/native";
import {Button, Text, View} from "react-native";

export const SecondScreen = () => {
  const navigation = useAppNavigation();
  const route = useRoute<SecondScreenRouteProp>()
  const params = route.params
  
  return (
    <View >
      <Text style={{fontSize: 50}}>--2--</Text>
      <Text>props:{params?.id}</Text>
      
      <Button title="Go to --1--" onPress={() => navigation.navigate('First')}/>
      <Button title="Go to --Home--" onPress={() => navigation.navigate('Home')}/>
      
      <Button title="Back" onPress={() => {
        navigation.goBack();
      }}/>
    
    </View>
  )
}