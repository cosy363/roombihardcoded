import React, { Component } from 'react';
import { Button, StyleSheet, Text, Dimensions, View, ScrollView, Image, navigation, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient'

import chair from './assets/home/chair.png';
import gear from './assets/home/gear.png';

import imagePath1 from './assets/furniture/침대.jpg';
import imagePath2 from './assets/furniture/책상.jpg';
import imagePath3 from './assets/furniture/의자.jpg';
import imagePath4 from './assets/furniture/소파.jpg';
import imagePath5 from './assets/furniture/수납장.jpg';
import imagePath6 from './assets/furniture/선반.jpg';
import imagePath7 from './assets/furniture/옷장.jpg';
import imagePath8 from './assets/furniture/조명.jpg';
import imagePath9 from './assets/furniture/러그.jpg';


import imagePath3_1 from './assets/heart/3테이블.jpg';
import imagePath3_2 from './assets/heart/3의자.jpg';
import imagePath3_3 from './assets/heart/3스탠드.jpg';
import imagePath3_4 from './assets/heart/3식물.jpg';


import monocle from './assets/home/monocle.png';




function MainScreen({navigation})  {

  return (
      <View style={{ flex:10, alignItems: 'center', backgroundColor:"#F7F7F7",}}>

      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={{marginTop:100,}}>
        <Text style={{fontSize:35, fontWeight:"700", color:'#353535'}}>연세님</Text>
        <Text style={{fontSize:35, fontWeight:"700", color:'#353535'}}>안녕하세요</Text>
      </View>

        <TouchableOpacity style={{backgroundColor:"white", width:360, height:190, marginTop:30, borderRadius:30,}} 
         onPress={() => navigation.navigate('rcmd')} activeOpacity={0.5}>
          <Text style={{fontSize:24, fontWeight:'700', marginLeft:25, marginVertical:25,}}>추천 받기</Text>

          <View style={{flexDirection:'row'}}>
            <View style={{backgroundColor:'#f7f7f7', width:90, height:90, marginLeft:25, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image source={chair} style={{width:60, height:60,}}/>
            </View>

            <View>
               <Text style={{fontSize:16, fontWeight:'600', marginLeft:25, marginTop:20,}}>기존 설정으로</Text>
               <Text style={{fontSize:24, fontWeight:'700', marginLeft:25,}}>새로운 추천 받기</Text>
            </View>

              <Entypo name="chevron-right" size={24} color="#74a6f3" style={{marginTop:30, marginLeft:35,}}/>

          </View>
        </TouchableOpacity>


        <View style={{backgroundColor:"white", width:360, height:160, marginTop:10, borderRadius:30,}}>
          <Text style={{fontSize:24, fontWeight:'700', marginLeft:25, marginVertical:25,}}>가구 변경하기</Text>

          <View style={{flexDirection:'row'}}>
            <View style={{backgroundColor:'white', width:58, height:58, marginLeft:23, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image source={imagePath3} style={{width:41, height:41,}}/>
            </View>
            <View style={{backgroundColor:'white', width:58, height:58, marginLeft:13, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image source={imagePath4} style={{width:41, height:41,}}/>
            </View>
            <View style={{backgroundColor:'white', width:58, height:58, marginLeft:13, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image source={imagePath5} style={{width:41, height:41,}}/>
            </View>
            <View style={{backgroundColor:'white', width:58, height:58, marginLeft:13, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image source={imagePath1} style={{width:41, height:41,}}/>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('reset')} style={{marginLeft:13,}}>
              <Image source={gear} style={{width:22, height:22, marginTop:17, marginLeft:7}}/>
            </TouchableOpacity>

          </View>
        </View>



        <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:30 , fontWeight:'700', marginLeft:10, marginTop:45, color:'#353535'}}>INTP시군요?</Text>
         <Image source={monocle} style={{width:30, height:30, marginLeft:5, marginTop:45}}/>
        </View>





        <View style={{backgroundColor:"white", width:360, height:180, marginTop:15, borderRadius:30,}}>
          <Text style={{fontSize:24, fontWeight:'700', marginLeft:25, marginVertical:25,}}>인팁이 가장 선호하는</Text>

          <View style={{flexDirection:'row', marginTop:10,}}>
            <View style={{backgroundColor:'white', width:58, height:58, marginLeft:33, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image source={imagePath3_1} style={{width:45, height:45,}}/>
              <Text style={{marginTop:2, fontWeight:"700", fontSize:15,}}>IKEA</Text>
              <Text style={{marginTop:1, fontWeight:"600", fontSize:12,}}>테이블</Text>
            </View>
            <View style={{backgroundColor:'white', width:58, height:58, marginLeft:18, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image source={imagePath3_2} style={{width:45, height:39,}}/>
              <Text style={{marginTop:5, fontWeight:"700", fontSize:15,}}>IKEA</Text>
              <Text style={{marginTop:1, fontWeight:"600", fontSize:12,}}>의자</Text>
            </View>
            <View style={{backgroundColor:'white', width:58, height:58, marginLeft:18, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image source={imagePath3_3} style={{width:45, height:39,}}/>
              <Text style={{marginTop:5, fontWeight:"700", fontSize:15,}}>IKEA</Text>
              <Text style={{marginTop:1, fontWeight:"600", fontSize:12,}}>조명</Text>
            </View>
            <View style={{backgroundColor:'white', width:58, height:58, marginLeft:18, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image source={imagePath3_4} style={{width:55, height:39,}}/>
              <Text style={{marginTop:5, fontWeight:"700", fontSize:15,}}>IKEA</Text>
              <Text style={{marginTop:1, fontWeight:"600", fontSize:12,}}>식물</Text>
            </View>

          </View>
        </View>

      </ScrollView>


  </View>

    );

  }export default MainScreen;


  const styles = StyleSheet.create({
    recomend: {
      backgroundColor: '#74a6f3',
      width:350,
      height:210,
      borderRadius:30,
      alignItems: 'center', 
      justifyContent: 'center',
      marginTop:160,
    },
    category: {
      marginTop:15,
      flex:0.6,
      width:350,
      flexDirection: 'row'
  
    },
    categorydetail:{
      backgroundColor:'#74a6f3',
      width:65,
      height:40,
      borderRadius:10,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    categorydetail2:{
      backgroundColor:'#74a6f3',
      width:65,
      height:40,
      marginLeft:10,
      borderRadius:10,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    catefont:{
      color:'white',
      fontWeight:'800',
      fontSize:20,
    },
    bottom1:{
      flex:0.01,
      marginTop:290,
      backgroundColor:"#D4D4D4",
      width:500
    },
    bottom2:{
      marginTop:20
    },
  })  
