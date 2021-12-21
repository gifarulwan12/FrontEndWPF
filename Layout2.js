import React,{useState,useEffect} from 'react';
import { Image, Text, View, StyleSheet ,FlatList, TouchableOpacity} from 'react-native';
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


export default function Layout2({navigation}) {
  const [anggotaukm,setAnggotaukm]=useState([])
  const getAnggotaukm = async () => {
    try {
      const dataIsi = await axios.get(
        'https://rocky-peak-65151.herokuapp.com/api/anggotaukm'
      );
      setAnggotaukm(dataIsi.data);
      console.log(dataIsi.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(()=>{
    getAnggotaukm()
},[])
  return (
   <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <Text
          style={{
            color:'orange',
            fontSize:16,
            marginLeft:20,
            fontWeight:"bold",
            }}>
            ANGGOTA UKM
            </Text>
            

            <View style={styles.container}>
            <FlatList
            style={{
              marginTop:20,
              alignItems:'center',
            }}
            numColumns={2}
      data={anggotaukm}
      renderItem={
        ({item})=>(
          <>
          <TouchableOpacity onPress={()=>navigation.navigate('Layout4',item)}>
          <View
      style={{
        justifyContent:"center",
        alignItems:"center",
        margin:20
      }}>
      
<View>
      <Text
      style={{
        width:100,
        color:'#2A2E3B',
        fontWeight:'bold'
      }}>
      {item.id_anggota.nama}</Text>
      </View>
      <View
style={{
        backgroundColor:'orange',
        padding:10,
        marginTop:10,
        borderRadius:10
      }}>
      <Image source={{uri:'https://rocky-peak-65151.herokuapp.com/gambar/'+item.id_ukm.foto,
      width:100, height:100}} style={{ }} />
      </View>
      </View>
      </TouchableOpacity>
          </>
          
        )
      }
      /> 

      <View
      style={{
        flexDirection:'row',
        justifyContent:"space-around",
        marginTop:35,
      }}>
      <View
      style={{
        backgroundColor:'white',
        padding:10,
        borderRadius:10,

      }}>

      <View
      style={{
        flexDirection:'row',
        justifyContent:"space-between"
      }}>
      
             
      </View>

      

      </View>

      </View>

      <View
      style={{
        flexDirection:'row',
        justifyContent:"space-around",
      }}
      
      >
      <View
      style={{
        backgroundColor:'white',
        padding:10,
        borderRadius:10
      }}
      >

      <View
      style={{
        flexDirection:'row',
        justifyContent:"space-between"
      }}
      >
          
      </View>

      <View
      style={{
        justifyContent:"center",
        alignItems:"center"
      }}>
      </View>

      </View>
      <View
      style={{
        backgroundColor:'white',
        padding:10,
        borderRadius:10
      }}
      >

      <View
      style={{
        flexDirection:'row',
        justifyContent:"space-between"
      }}
      >
          
      </View>

      <View
      style={{
        justifyContent:"center",
        alignItems:"center"
      }}
      >
      
      
      </View>

      </View>

      </View>

      
      </View>
      
    <View>
      
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
    backgroundColor: '#FFFFFF',
  },
  header:{
    padding:20,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center"
  },
  image:{
    height:100,
    width:100
  },
  pilihan:{
    height:50,
    backgroundColor:'#EDF1F3',
    position:"relative",
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:'center',
    zIndex:9999
  },
   
});
