
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import HomeScreen from './Components/HomeScreen';
import VeggiesPage from './Components/VeggiesPage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="homescreen" screenOptions={{ headerShown: false}}>
      <Stack.Screen name="homescreen" component={HomeScreen} /> 
      <Stack.Screen name="veggiespage" component={VeggiesPage} /> 
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

 
});

