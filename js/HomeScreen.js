import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

import chair from '../assets/home/chair.png';
import money from '../assets/home/money.png';
import palette from '../assets/home/palette.png';
import bed from '../assets/home/bed.png';

function MainScreen({ navigation }) {

  return (
    <View style={{ flex: 10, alignItems: 'center', backgroundColor: "#F7F7F7", }}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ marginTop: 110, marginLeft: 10, }}>
          <Text style={styles.hello}>Username님</Text>
          <Text style={styles.hello}>안녕하세요</Text>
        </View>

        <TouchableOpacity style={{ backgroundColor: "white", width: 360, height: 190, marginTop: 30, borderRadius: 30, }}
          onPress={() => navigation.navigate('rcmd')} activeOpacity={0.5}>
          <Text style={{ fontSize: 20, fontWeight: '700', marginLeft: 25, marginVertical: 25, }}>추천 받기</Text>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#f7f7f7', width: 90, height: 90, marginLeft: 25, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={chair} style={{ width: 60, height: 60, }} />
            </View>

            <View>
              <Text style={{ fontSize: 14, fontWeight: '600', marginLeft: 25, marginTop: 20, }}>기존 설정으로</Text>
              <Text style={{ fontSize: 22, fontWeight: '700', marginLeft: 25, }}>새로운 추천 받기</Text>
            </View>

          </View>
        </TouchableOpacity>


        <View style={{ marginTop: 30, marginLeft: 10}}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: '#353535' }}>설정 변경</Text>
        </View>


        <TouchableOpacity style={[styles.set_background, {marginTop:18}]}
          onPress={() => navigation.navigate('budget2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 15}}>
            <View style={styles.set_circle_background}>
              <Image source={money} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={styles.set_main_text}>예산 </Text>
              <Text style={styles.set_side_text}>300,000원</Text>
            </View>
          </View>
          
        </TouchableOpacity>


        <TouchableOpacity style={styles.set_background}
          onPress={() => navigation.navigate('color2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 15}}>
            <View style={styles.set_circle_background}>
              <Image source={palette} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={styles.set_main_text}>색 / 재질</Text>
              <Text style={styles.set_side_text}>레드 그린 우드</Text>
            </View>
          </View>
          
        </TouchableOpacity>

        <TouchableOpacity style={[styles.set_background, {marginBottom:50,}]}
          onPress={() => navigation.navigate('furniture2')} activeOpacity={0.5}>

          <View style={{ flexDirection: 'row', marginTop: 15}}>
            <View style={styles.set_circle_background}>
              <Image source={bed} style={{ width: 41, height: 41, }} />
            </View>

            <View>
              <Text style={styles.set_main_text}>가구 </Text>
              <Text style={styles.set_side_text}>침대 책상 의자 소파</Text>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>

  );

} export default MainScreen;


const styles = StyleSheet.create({
  recomend: {
    backgroundColor: '#74a6f3',
    width: 350,
    height: 210,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 160,
  },
  hello: {
    fontSize: 22, fontWeight: "700", color: '#353535'
  },
  set_background: {
    backgroundColor: "white", width: 360, height: 100, marginTop: 15, borderRadius: 30
  },
  set_circle_background: {
    backgroundColor: '#f7f7f7', width: 70, height: 70, marginLeft: 25, borderRadius: 50, alignItems: 'center', justifyContent: 'center' 
  },
  set_main_text:{
    fontSize: 20, fontWeight: '700', marginLeft: 15, marginTop: 15
  },
  set_side_text:{
    fontSize: 13, fontWeight: '300', marginLeft: 15
  },
  category: {
    marginTop: 15,
    flex: 0.6,
    width: 350,
    flexDirection: 'row'

  },
  categorydetail: {
    backgroundColor: '#74a6f3',
    width: 65,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categorydetail2: {
    backgroundColor: '#74a6f3',
    width: 65,
    height: 40,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catefont: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20,
  },
  bottom1: {
    flex: 0.01,
    marginTop: 290,
    backgroundColor: "#D4D4D4",
    width: 500
  },
  bottom2: {
    marginTop: 20
  },
})  
