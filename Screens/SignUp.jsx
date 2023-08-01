import { ScrollView,
	TextInput,
	TouchableOpacity,
	Image,
	Text, 
	View,
	Alert
} from 'react-native';
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn, Button } from '../components';
import { Formik, formik } from 'formik';
import * as Yup from 'yup';
import {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons"
import styles from './login.style';
import { COLORS } from '../constants';

const SignUp = ( { navigation }) => {
	const [loader, setLoader] = useState(false);
	const [obsecureText, setObsecureText] = useState(false)
	
	const validationSchema = Yup.object().shape({
		password: Yup.string()
			.min(8, 'Must be atleast 8 characters')
			.required('Required'),
		email: Yup.string().email('Invalid email address').required('Required'),
		location: Yup.string().min(3, 'Provide a valid location').required('Required'),
	});

	const InvalidForm = () => {
		Alert.alert(
			"Invalid Form",
			"Please fill all fields",
			[
				{
					text: "Cancel", onPress: () => {}
				},
				{
					text: "Continue", onPress: () => {}
				},
				//{defaultIndex: 1}
		]
		)
	}

	
	return (
		<ScrollView>
			<SafeAreaView style={{marginHorizontal: 20}}>
				<View>
					<BackBtn onPress={() => navigation.goBack()} />
					<Image
						source={require('../assets/images/bk.png')}
						style={styles.cover}
					/>
					<Text style={styles.title}>Fruity</Text>
					<Formik
						initialValues={{email: '', password: '', location: ''}}
						validationSchema={validationSchema}
						onSubmit={(values) => console.log(values)}
					>
					{({ handleChange, handleBlur, handleSubmit, values, errors, isValid,touched, setFieldTouched }) => (
						<View>
							<View style={styles.wrapper}>
								<Text style={styles.txtLabel}>
									Location
								</Text>
								<View style={styles.inputWrapper(touched.location ? COLORS.secondary : COLORS.offwhite)}>
									<Ionicons
										name='location-outline'
										size={20}
										color={COLORS.gray}
										style={styles.iconStyle}
									/>
									<TextInput
										placeholder='Enter location'
										onFocus={() => {setFieldTouched('location')}}
										onBlur={() => setFieldTouched('location', '')}
										value={values.location}
										onChangeText={handleChange('location')}
										autoCapitalize='none'
										autoCorrect={false}
										style={{flex: 1}}
									/>

								</View>
								{touched.elocationmail && errors.location && (
									<Text style={styles.errorMessage}>errors.location</Text>
								)}
							</View>

							<View style={styles.wrapper}>
								<Text style={styles.txtLabel}>
									Email
								</Text>
								<View style={styles.inputWrapper(touched.email ? COLORS.secondary : COLORS.offwhite)}>
									<MaterialCommunityIcons
										name='email-outline'
										size={20}
										color={COLORS.gray}
										style={styles.iconStyle}
									/>
									<TextInput
										placeholder='Enter Email'
										onFocus={() => {setFieldTouched('email')}}
										onBlur={() => setFieldTouched('email', '')}
										value={values.email}
										onChangeText={handleChange('email')}
										autoCapitalize='none'
										autoCorrect={false}
										style={{flex: 1}}
									/>

								</View>
								{touched.email && errors.email && (
									<Text style={styles.errorMessage}>errors.email</Text>
								)}
							</View>

							<View style={styles.wrapper}>
								<Text style={styles.txtLabel}>
									Password
								</Text>
								<View style={styles.inputWrapper(touched.password ? COLORS.secondary : COLORS.offwhite)}>
									<MaterialCommunityIcons
										name='lock-outline'
										size={20}
										color={COLORS.gray}
										style={styles.iconStyle}
									/>
									<TextInput
										secureTextEntry={obsecureText}
										placeholder='password'
										onFocus={() => {setFieldTouched('password')}}
										onBlur={() => setFieldTouched('password', '')}
										value={values.password}
										onChangeText={handleChange('password')}
										autoCapitalize='none'
										autoCorrect={false}
										style={{flex: 1}}
									/>
								<TouchableOpacity onPress={() => setObsecureText(!obsecureText)}>
									<MaterialCommunityIcons
										name={obsecureText ? "eye-outline" : "eye-off-outline"}
										size={18}
									/>
								</TouchableOpacity>
								</View>
								{touched.email && errors.email && (
									<Text style={styles.errorMessage}>errors.email</Text>
								)}
							</View>

							<Button 
								title={"S I G N U P"} 
								onPress={isValid ? handleSubmit: InvalidForm} 
								isValid={isValid}
							/>

							<Text 
								style={styles.registration}
								onPress={() => navigation.navigate('SignUp')}
							>
								Login</Text>
						</View>
					)}
					</Formik>
				</View>
			</SafeAreaView>
		</ScrollView>
	)
}

export default SignUp

