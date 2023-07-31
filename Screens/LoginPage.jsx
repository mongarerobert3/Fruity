import { ScrollView,
	 TextInput,
	 TouchableOpacity,
	 Image,
	 Text, 
	 View 
} from 'react-native';
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn, Button } from '../components';
import { Formik, formik } from 'formik';
import * as Yup from 'yup';

import styles from './login.style';

const validationSchema = Yup.object().shape({
	password: Yup.string()
		.min(8, 'Must be atleast 8 characters')
		.required('Required'),
	email: Yup.string().email('Invalid email address').required('Required'),
});

const LoginPage = ({ navigation }) => {
	const [loader, setLoader] = useState(false);
	const [responseData, setResponseData] = useState(null)
	const [error, setError] = useState([])
	const [input, setInput] = useState({
		email: '',
		password: '',
	})
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
					>
					{({ handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldTouched }) => (
						<View>
							<View style={styles.wrapper}>
								<Text style={styles.txtLabel}>
									Email
								</Text>
							</View>
							<Button title={"L O G I N"} onPress={() => {}}/>
						</View>
					)}
					</Formik>
				</View>
			</SafeAreaView>
		</ScrollView>
	)
}

export default LoginPage
