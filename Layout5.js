          import React, {useState, useEffect} from 'react';
          import { Image, Text, View, StyleSheet,FlatList, TouchableOpacity } from 'react-native';
          import Constants from 'expo-constants';
          import axios from 'axios';

          // You can import from local files
          import AssetExample from './components/AssetExample';

          // or any pure javascript modules available in npm
          import { Card } from 'react-native-paper';
          import { Ionicons } from '@expo/vector-icons';
          import home from './assets/home.png';
          import search from './assets/search.png';
          import notif from './assets/notif.png';
          import account from './assets/account.png';
          import anggota from './assets/anggota.jpeg';
          import ukm from './assets/ukm.jpeg';


          export default function Layout5({navigation}) {
            
            return (
              <View style={styles.container}>
              
              <View style={styles.header}>
                <View style={{flexDirection:"row",
                height:35}}>
            
            
                </View>
                
                </View>
                <View
              style={{
                flexDirection:'row'
              }}
              >
              

              <View style={{
                flex:11,
                height:300,
              }}>
              
          <TouchableOpacity onPress={()=>navigation.navigate('Layout1')}>
             
                </TouchableOpacity>
          
      
             
              </View>
              </View>
                
                
              
              
              <View>
              <Text
                style={{
                  marginTop:-380,
                  marginLeft:20,
                  marginBottom:100,
                  fontWeight:"bold",
                  fontSize:17,
                  color:'orange'
                }}
              >
                UNIT KEGIATAN MAHASISWA PCR
              </Text>
              <View
              style={{flexDirection:'row',
              alignItems:"center"}}>
              <View
               style={{
                  marginLeft:40,
                  marginBottom:35,
                  marginRight:30,
                  fontWeight:"bold",
                  fontSize:17,
                  color:'orange'
                }}>
             <TouchableOpacity onPress={()=>navigation.navigate('Layout2')}>
      <Image source={anggota} style={{height:100, width:100}} />
      </TouchableOpacity >
      </View>
      <View
      style={{
                  marginLeft:10,
                  marginBottom:35,
                  marginRight:30,
                  fontWeight:"bold",
                  fontSize:17,
                  color:'orange'
                }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Layout1')}>
      <Image source={ukm} style={{height:100, width:100}} />
      </TouchableOpacity >
      </View>
      </View>
              </View>
                
         <View style={styles.pilihan}>
      <View>
          <View
          style={{
            width:15,
            height:15,
            borderRadius:20,
            position:"absolute",
            left:12,
            alignItems:'center',
            justifyContent:'center'
          }}
          ><Text style={{
            color:'white',
            textAlign:"center",
            fontSize:12
          }}>1</Text></View>
        <TouchableOpacity onPress={()=>navigation.navigate('Layout5')}>
      <Image source={home} style={{height:25, width:25}} />
      </TouchableOpacity >
          
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Layout1')}>
      <Image source={search} style={{height:25, width:25}} />
      </TouchableOpacity >
      <TouchableOpacity onPress={()=>navigation.navigate('Layout2')}>
      <Image source={notif} style={{height:25, width:25}} />
      </TouchableOpacity>
       <Image source={account} style={{height:25, width:25}} />
      </View>
   </View>
  );
}


          const styles = StyleSheet.create({
            container: {
              flex: 1,
              justifyContent: 'center',
              paddingTop: Constants.statusBarHeight,
              backgroundColor: '#FFFFFF',
              padding: 8,
            },
            paragraph: {
              margin: 24,
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            },
            buttomMenu:{
          height:40,
          backgroundColor:'#FCF0F2',
          borderRadius:0,
          position:"relative",
          flexDirection:'row',
          marginTop:50,
          justifyContent:"space-around",
          alignItems:'center',
          zIndex:9999
        },
        pilihan:{
    height:50,
    backgroundColor:'#EDF1F3',
    position:"relative",
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:'center',
    marginTop:100,
    zIndex:9999
  },
        textbox: {
    flexDirection: 'row',
    margin: 35,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent:"space-between"    
  },
            header:{
                padding:20,

                flexDirection:"row-reverse",
              }
          });
