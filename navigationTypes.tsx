import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define all your available routes
export type RootStackParamList = {
  home: undefined; // 'home' screen does not require params
  UserdetailScreen: undefined;
};

// Define the navigation prop type
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
