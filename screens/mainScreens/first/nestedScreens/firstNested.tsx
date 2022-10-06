import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NestedFirst} from '../../../types';
import {FirstSubScreenBegin} from "./firstSubScreenBegin";
import {FirstSubScreenEnd} from "./firstSubScreenEnd";
import {FirstScreen} from "../firstScreen";


const Stack = createNativeStackNavigator<NestedFirst>();


export const FirstNested = () => {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Begin" component={FirstSubScreenBegin}/>
      <Stack.Screen name="End" component={FirstSubScreenEnd}/>
      
    </Stack.Navigator>
  
  );
}

