import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Skip } from "../screens/Skip";
import { Home } from "../screens/Home";
import { PetDetails } from "../screens/PetDetails";

const Stack = createStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen
                options={{
                    gestureDirection: 'vertical',
                }}
                name="Skip"
                component={Skip}
            />
            <Stack.Screen
                options={{
                    gestureDirection: 'horizontal',
                }}
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="PetDetails"
                component={PetDetails}
            />
        </Stack.Navigator>
    );
}