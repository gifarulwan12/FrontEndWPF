import * as React from 'react';
import { Image, Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
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

import cisco from './assets/cisco.png';
import puty from './assets/puty.png';
import star from './assets/star.jpg';

export default function Layout3({route,navigation}) {
  const dataList=route.params
  return (
   <View style={styles.container}>
   <TouchableOpacity onPress={()=>navigation.navigate('Layout1')}>
      <Ionicons name="arrow-back-outline" size={30} color='black' style={{marginLeft:10 , marginTop:10}}/>
    </TouchableOpacity >

   
      
      <View
style={{
        backgroundColor:'',
        padding:10,
        marginTop:10,
        height:-100,
        borderRadius:10
      }}>
      <Image source={{uri:'https://rocky-peak-65151.herokuapp.com/gambar/'+dataList.foto,
      width:100, height:100}} style={{ }} />
      </View>
      <View style={styles.header}>
      
      <Text
          style={{
            color:'orange',
            fontSize:16,
            marginTop:10,
            alignItems:"center",
            fontWeight:"bold",
            }}>
            {dataList.nama}
            </Text>
      <View>
      <Ionicons name="person-outline" style={{
        marginTop:10,
        marginLeft:55,
        alignItems:"center",
        }}/>  
        <Text
        style={{
            color:'black',
            fontSize:10,
            marginTop:5,
            marginLeft:50,
            justifyContent:"space-around",
            alignItems:"center",
            }}>
            Politeknik Caltex Riau
            </Text>
            </View>
            
            <View>
      <Ionicons name="heart-outline" style color='#e36262' style={{
        marginTop:10,
        marginRight:1,
        }}/>
        <Text
        style={{
            color:'red',
            fontSize:10,
            marginTop:3,
            alignItems:"center",
            }}>
            Favorite
            </Text>
            </View>

             <View style={{
          flexDirection:'row',
            marginLeft:165,
            marginTop:5,
        }}>
        <Ionicons name="star" size={22} color="orange"
        style={{
          
          top:39,
          left:23,
          zIndex:1
        }}
        />
        <Ionicons name="star" size={22} color="orange"
        style={{

          top:39,
          left:53,
          zIndex:1
        }}
        />
        <Ionicons name="star" size={22} color="orange"
        style={{

          top:39,
          left:83,
          zIndex:1
        }}
        />
        <Ionicons name="star" size={22} color="orange"
        style={{

          top:39,
          left:113,
          zIndex:1
        }}
        />
        <Ionicons name="star-outline" size={22} color="orange"
        style={{

          top:39,
          left:143,
          zIndex:1
        }}
        />
      </View>
      
      
      
            </View>
        <View style={{
        backgroundColor: '#ffffff',
        height:5,
        marginTop:1,
          zIndex:-1
          
      }}>
      </View>
      <View>
      <Text
        style={{
            color:'black',
            fontSize:16,
            marginTop:5,
            marginLeft:5,
            fontStyle:'bold',
            justifyContent:"space-around",
            alignItems:"center",
            }}>
            DESKRIPSI
            </Text>
            </View>
      <View>
      <Text
        style={{
            color:'black',
            fontSize:14,
            marginTop:10,
            marginLeft:5,
            justifyContent:"space-around",
            alignItems:"stretch",
            }}>
            Jumlah Anggota : {dataList.jumlah_anggota}
            </Text>
            <Text
        style={{
            color:'black',
            fontSize:14,
            marginTop:10,
            marginLeft:5,
            justifyContent:"space-around",
            alignItems:"stretch",
            }}>
            Pembina : {dataList.pembina}
            </Text>
            <Text
        style={{
            color:'black',
            fontSize:14,
            marginTop:10,
            marginLeft:5,
            justifyContent:"space-around",
            alignItems:"stretch",
            }}>
            Kategori : {dataList.kategori.nama}
            </Text>
            </View>
  

      
      

      <View
        style={{
          
            marginTop:10,
            marginLeft:20,
        }}
        >
      
      
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
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#EDF1F3',
  },
  header:{
    padding:20,
    alignItems:"center"
  },pilihan:{
    height:50,
    backgroundColor:'#EDF1F3',
    position:"relative",
    flexDirection:'row',
    marginTop:185,
    justifyContent:"space-around",
    alignItems:'center',
    zIndex:9999
  },
});