import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../constants'
import { Home, Search, Profile, Cart } from '../Screens';

const Tab = createBottomTabNavigator();

const ScreenOptions = {
	tabBarShowLabel: false,
	tabBarHideOnKeyBoard: true,
	headersShown: false,
	tabBarStyle: {
		position: "absolute",
		bottom: 0,
		right: 0,
		left: 0,
		elevation: 0,
		height: 70
	}
}

const BottomTabNavigation = () => {
	return (
		<Tab.Navigator screenOptions={ScreenOptions}>

			<Tab.Screen 
				name="Home" 
				component={Home}
				options={{
					headerShown: false,
					tabBarIcon: ({focused}) => {
						return <Ionicons name={focused ? "home" : "home-outline"}
						size={24}
						color={focused ? COLORS.primary : COLORS.black}
						/>
					}
				}}
				/>
				<Tab.Screen 
					name="Cart" 
					component={Cart}
					options={{
						headerShown: false,
						tabBarIcon: ({focused}) => {
							return <Ionicons
							name={"cart-outline"}
							size={24}
							color={focused ? COLORS.primary : COLORS.black}
							/>
						}
					}}
					/>

				<Tab.Screen 
					name="Search" 
					component={Search}
					options={{
						headerShown: false,
						tabBarIcon: ({focused}) => {
							return <Ionicons
							name={"search-sharp"}
							size={24}
							color={focused ? COLORS.primary : COLORS.black}
							/>
						}
					}}
					/>

				<Tab.Screen 
					name="Profile" 
					component={Profile}
					options={{
						headerShown: false,
						tabBarIcon: ({focused}) => {
							return <Ionicons name={focused ? "person" : "person-outline"}
							size={24}
							color={focused ? COLORS.primary : COLORS.black}
							/>
						}
					}}
				/>

		</Tab.Navigator>
	)
}

export default BottomTabNavigation