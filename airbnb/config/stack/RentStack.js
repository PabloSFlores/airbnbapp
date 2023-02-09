import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Rent from '../../modules/rent/adapters/screens/Rent'
const Stack = createNativeStackNavigator()

export default function AboutStack() {
    return (
        <Stack.Navigator
            initialRouteName='rentStack'
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#ff5a60' }
            }}>
            <Stack.Screen
                name='rentStack'
                options={{ title: 'Renta tu próxima estancia' }}
                component={Rent}
            />
        </Stack.Navigator>
    )
}