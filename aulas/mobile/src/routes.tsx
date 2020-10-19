import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"

const {Navigator, Screen} = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

/**
 * @description Configura as rotas de navegação entre telas no app
 */
export default  function Routes(){
    return (
        <NavigationContainer>
            <Navigator 
                screenOptions={
                    //desabilita ActionBar
                    {headerShown: false}}
            >
                <Screen name="OrphanagesMap" component={OrphanagesMap}/>
                <Screen name="OrphanageDetails" component={OrphanageDetails}/>
            </Navigator>
        </NavigationContainer>
    )
};