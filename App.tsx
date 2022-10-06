import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Main} from "./screens/main";

export default function App() {
  return (
    
    <NavigationContainer>
      <Main/>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}
