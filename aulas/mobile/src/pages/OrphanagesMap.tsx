import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, {Callout, Marker,PROVIDER_GOOGLE}  from 'react-native-maps'
import mapMarker  from '../images/map-marker.png';
import {Feather} from '@expo/vector-icons'
import { useNavigation, useFocusEffect} from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

/**
 * @description Mostra uma tela que mostra o mapa com os orfanatos
 */


interface Orphanage{
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}
export default function OrphanageMaps (){
    const navigation = useNavigation();

    const [ orphanages, setOrphanages] = useState<Array<Orphanage>>([])

    useFocusEffect(() => {
        api.get('orphanages').then(response => {
        setOrphanages(response.data)
      });
    })
    
    
    function handleNavigateToCreateOrphanage(){
      navigation.navigate("SelectMapPosition")
    }
    /**
     * @description Função para navegar para a tela OrphanageDetails
     */

    function handleNavigateToOrphanageDetails(id: number){
        navigation.navigate('OrphanageDetails', {id})
    }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -23.437205,
          longitude: -46.4623279,
          latitudeDelta:0.008,
          longitudeDelta:0.008
        }
        }
      >
      {
        orphanages.map(orphanage=>{
        
          return (
            <Marker
            key={orphanage.id}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }} 
            icon={mapMarker}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
    
            <Callout tooltip onPress={()=> handleNavigateToOrphanageDetails(orphanage.id)}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
              </View>
            </Callout>
          </Marker>
          )})}

      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{orphanages.length} Casas de Acolhimento encontradas</Text>
     
        <RectButton  style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
            <Feather name="plus" size={20} color="#fff"/>
        </RectButton >

      </View>
    </View>
  );
}

  
  
//variavel que armazena estilos
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: Dimensions.get('window').width,
      height:Dimensions.get('window').height
    },
    
    //estilo para container do texto Callout
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 16,
      justifyContent: 'center',     
    },
  
    //estilo para texto do calloutContainer
    calloutText:{
      fontFamily: 'Nunito_700Bold',
      color: '#0089a5',
      fontSize: 14
  
    },
    
  
    //estilo  do rodapé
    footer:{
      position: 'absolute',
      left:24,
      right:24,
      bottom:32,
  
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 46,
      paddingLeft: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation:3,
  
    },
  
    //estilo para texto do rodapé
    footerText:{
      fontFamily : 'Nunito_700Bold',
      color: '#8fa7b3'
    },
  
    //estilo para borão criar orfanato
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center'
    },
  
  });
  