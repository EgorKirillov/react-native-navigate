import {NavigationProp, NavigatorScreenParams, RouteProp, useNavigation} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {FirstSubScreenEnd} from "./mainScreens/first/nestedScreens/firstSubScreenEnd";

export type NestedFirst = {
  Begin: undefined
  End: undefined
}

export type RootStack = {
  Home: undefined
  First: NavigatorScreenParams<NestedFirst>
  Second: {    id: number | string  }  | undefined
}

export type NavigationUseType = NavigationProp<RootStack>
export type HomePropsType = NativeStackScreenProps<RootStack, 'Home'>
export type FirstPropsType = NativeStackScreenProps<RootStack, 'First'>
export type SecondPropsType = NativeStackScreenProps<RootStack, 'Second'>

// typing useRoute
export type SecondScreenRouteProp = RouteProp<RootStack, 'Second'>;


export const useAppNavigation = () => useNavigation<NavigationUseType>()
