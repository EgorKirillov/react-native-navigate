import {HomePropsType, useAppNavigation} from "../../types";
import {Button, Text, View} from "react-native";

export function HomeScreen({}: HomePropsType) {
  
  const navigation = useAppNavigation();
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>1 yarn add @react-navigation/native</Text>
      <Text>for expo 2 npx expo install react-native-screens react-native-safe-area-context</Text>
      <Text>for react native 2 yarn add react-native-screens react-native-safe-area-context</Text>
      <Text>STACK</Text>
      <Text>3 yarn add @react-navigation/native-stack</Text>
      <Text>navigation.canGoBack().toString()={navigation.canGoBack().toString()}</Text>
      
      
      <Button title="Go to --1--" onPress={() => navigation.navigate('First')}/>
      <Button title="Go to --2--" onPress={() => navigation.navigate('Second', {id: " JUMP from Home"})}/>
      
      {navigation.canGoBack() && <Button title="Back" onPress={() => {
        navigation.goBack()
      }}/>}
    
    
    </View>
  );
}