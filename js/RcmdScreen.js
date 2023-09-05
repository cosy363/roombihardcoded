import React, { Component } from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, RefreshControl, View, ScrollView, Image, navigation, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


import desk from '../assets/rcmd/1desk.jpg';
import closet from '../assets/rcmd/1sidetable.jpg';
import stand from '../assets/rcmd/1light.jpg';
import chair from '../assets/rcmd/chair.webp';


function MainScreen({ navigation }) {

  const saveItem = () => {
    Alert.alert(
    "추가",
    "찜 목록에 추가되었습니다!",
    [
      {
        text: "확인",
        onPress: () => console.log("추가완료"),
      },
    ],
    { cancelable: false }
    );
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);

    // 여기에서 추가적인 작업을 수행할 수 있습니다.
  };

  return (

    <View style={styles.container}>

      <StatusBar style="block"></StatusBar>

      <View style={styles.ask1}>
        <Text style={styles.askcolor}>Username님만을 위한</Text>
        <Text style={styles.askcolor}>추천 인테리어입니다</Text>
      </View>

      <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={styles.day}>
          <Image style={styles.image} source={desk} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>책상</Text>
            <Text style={styles.recdtxt3}>121,200</Text>
          </View>
        </View>

        <View style={styles.day}>
          <Image style={styles.image} source={closet} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>수납장</Text>
            <Text style={styles.recdtxt3}>58,000</Text>
          </View>
        </View>

        <View style={styles.day}>
          <Image style={styles.image} source={stand} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>조명</Text>
            <Text style={styles.recdtxt3}>33,500</Text>
          </View>
        </View>

        <View style={styles.day}>
          <Image style={styles.image} source={chair} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.recdtxt}>IKEA</Text>
            <Text style={styles.recdtxt2}>의자</Text>
            <Text style={styles.recdtxt3}>23,500</Text>
          </View>
        </View>


      </ScrollView>

      <View style={{ flexDirection: 'row' }}>

        <Text style={styles.price}>
          <Text>total </Text>
          <Text style={{ fontSize: 28, fontWeight: "900" }}>236,200</Text>
        </Text>

        <TouchableOpacity onPress={() => saveItem()}>
          <AntDesign name="heart" size={35} color="#FA5882" style={{marginTop:30, marginLeft:100, }} />
        </TouchableOpacity>

      </View>

    </View>

  );

} export default MainScreen;



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white"
  },
  ask1: {
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  askcolor: {
    fontSize: 26,
    fontWeight: "900",
  },
  day: {
    flexDirection: 'row',
    backgroundColor: "#F2F2F2",
    marginTop: 12,
    height: 120,
  },
  colorname: {
    fontSize: 20,
    fontWeight: "900",
    justifyContent: "space-between",
    marginLeft: 20
  },
  price: {
    flexDirection: "row",
    padding: 30,
    fontSize: 20,
    marginBottom: 40,
  },
  image: {
    marginLeft: 30,
    marginVertical: '3%',
    height: 95,
    width: 95,
    borderRadius: 5,
  },
  recdtxt: {
    marginLeft: 20,
    marginTop: 37,
    fontSize: 17,
    fontWeight: "800",
    color: "#424242"
  },
  recdtxt2: {
    marginLeft: 20,
    marginTop: 2,
    fontSize: 11,
    fontWeight: "500",
  },
  recdtxt3: {
    marginLeft: 20,
    marginTop: 2,
    fontSize: 20,
    fontWeight: "800",
  },
  icon: {
    paddingHorizontal: 45,
  }
})