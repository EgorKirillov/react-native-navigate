import {StyleSheet} from 'react-native';
import {RootStack} from "./types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FirstScreen} from "./mainScreens/first/firstScreen";
import {SecondScreen} from "./mainScreens/second/secondScreen";
import {HomeScreen} from "./mainScreens/home/homeScreen";
import {FirstNested} from "./mainScreens/first/nestedScreens/firstNested";


// const Stack = createNativeStackNavigator<RootStack>();
const Stack = createBottomTabNavigator<RootStack>();


export const Main = () => {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      
      <Stack.Screen name="First" component={FirstNested}/>
      <Stack.Screen name="Second" component={SecondScreen}/>
      
      {/*<Stack.Screen name="Second">*/}
      {/*  {(props) => (<SecondScreen {...props} />)}*/}
      {/*</Stack.Screen>*/}
      
      
    </Stack.Navigator>
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
