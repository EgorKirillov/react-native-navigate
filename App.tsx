import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>1 yarn add @react-navigation/native</Text>
      <Text>for expo 2  npx expo install react-native-screens react-native-safe-area-context</Text>
      <Text>for react native  2  yarn add react-native-screens react-native-safe-area-context</Text>
      
      <StatusBar style="auto" />
    </View>
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
