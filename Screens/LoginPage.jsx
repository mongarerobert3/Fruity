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
import {MaterialCommunityIcons} from "@expo/vector-icons"
import styles from './login.style';
import { COLORS } from '../constants';

const validationSchema = Yup.object().shape({
	password: Yup.string()
		.min(8, 'Must be atleast 8 characters')
		.required('Required'),
	email: Yup.string().email('Invalid email address').required('Required'),
});

const LoginPage = ({ navigation }) => {
	const [loader, setLoader] = useState(false);
	const [responseData, setResponseData] = useState(null)
	const [obsecureText, setObsecureText] = useState(false)
	
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
						initialValues={{email: '', password: ''}}
						validationSchema={validationSchema}
						onSubmit={(values) => console.log(values)}
					>
					{({ handleChange, handleBlur, handleSubmit, values, errors, isValid,touched, setFieldTouched }) => (
						<View>
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
								title={"L O G I N"} 
								onPress={isValid ? handleSubmit: InvalidForm} 
								isValid={isValid}
							/>

							<Text 
								style={styles.registration}
								onPress={() => navigation.navigate('SignUp')}
							>
								Register</Text>
						</View>
					)}
					</Formik>
				</View>
			</SafeAreaView>
		</ScrollView>
	)
}

export default LoginPage
