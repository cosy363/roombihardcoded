import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator , StackNavigationProp } from '@react-navigation/stack';
import { AntDesign, Feather, Ionicons, FontAwesome, Entypo  } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image, Button, StatusBar } from 'react-native';
import { getFocusedRouteNameFromRoute} from '@react-navigation/native';

import LoginScreen from './LoginScreen'; //0
import BudgetScreen from './BudgetScreen'; //1
import ColorScreen from './ColorScreen'; //2
import StyleScreen from './StyleScreen'; //3
import FurnitureScreen from './FurnitureScreen'; //4

import HomeScreen from './HomeScreen'; //5
import HeartScreen from './HeartScreen'; //6
import MypageScreen from './MypageScreen'; //7

import RcmdScreen from './RcmdScreen'; //8
import ResetScreen from './ResetScreen'; //9


const Stack = createStackNavigator();

function App({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="budget" component={BudgetScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="color" component={ColorScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="style" component={StyleScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="furniture" component={FurnitureScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="main" component={Root}
        options={{
          headerShown:false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}




const Tab = createBottomTabNavigator();

const Root = () => {
  return (
        <Tab.Navigator>
            <Tab.Screen name="mainhome" component={HomeStackScreen} 
            options= {({ route }) => ({
              tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                console.log(routeName)
                if (routeName === 'rcmd') {
                  return { display: "none" }
                }
                else if (routeName === 'reset') {
                  return { display: "none" }
                }
              })(route),
              headerShown:false,
              unmountOnBlur:true,
              tabBarLabel: '홈',
              animationEnabled: false,
              tabBarIcon: ({focused}) => (<Ionicons name="home" size={24} color="black" style={{color:focused ? '#4e9bde' :'#BDBDBD', marginTop:14,}}/>)
            })}/>

            <Tab.Screen name="heart" component={HeartScreen} 
            options={{
              tabBarIcon: ({focused}) => (<FontAwesome name="heart" size={23} color="black" style={{color:focused ? '#4e9bde' :'#BDBDBD', marginTop:14,}}/>),
              tabBarLabel: '찜',
              title:'',
              headerLeft:()=>
                <View>
                  <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>찜</Text>
                </View>,
           }}/>

            <Tab.Screen name="mypage" component={MypageScreen} 
            options={{
              tabBarIcon: ({focused}) => (<Ionicons name="person" size={24} color="black" style={{color:focused ? '#4e9bde' :'#BDBDBD', marginTop:14,}}/>),
              tabBarLabel: '마이페이지',
              title:'',
              headerLeft:()=>
                <View>
                  <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>마이페이지</Text>
                </View>,
             }}/>

        </Tab.Navigator>
  );
};



const HomeStack = createStackNavigator();

function HomeStackScreen({navigation}){
  return(
      <HomeStack.Navigator>
        <Stack.Screen name="home" component={HomeScreen}
        options={{
          title:'',
          headerShown:false,
          headerLeft:()=>
            <View>
              <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>홈</Text>
            </View>,
        }}
        />

        <Stack.Screen name="rcmd" component={RcmdScreen}
        options={{
          title:'',
          headerLeft:()=>
            <View>
              <Entypo name="chevron-left" size={24} color="#424242" style={{marginLeft:20, marginBottom:5,}} />
            </View>,
        }}
        />

        <Stack.Screen name="reset" component={ResetScreen}
        options={{
          headerShown:false,
        }}
        />
      </HomeStack.Navigator>
  )
}






export default App;