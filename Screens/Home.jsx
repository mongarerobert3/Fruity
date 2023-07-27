import { Image, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './home.style';
import { SearchBar, Categories, Welcome, FruitsRow} from '../components';

const Home = () => {
  return (
    <SafeAreaView>
    <View style={styles.appBarWrapper}>
      <View style={styles.appBar}>
        <Text style={styles.welcomeText}>
          Welcome {'\n'}
        </Text>
        <Image
          source={require("../assets/images/54.jpg")}
          style={styles.avatar}
        />
      </View>
      <View>
        <Text style={styles.nameText}>
          Robert Mong'are
        </Text>
        </View>
    </View>
    <SearchBar/>
    <Categories/>
    <Welcome />
    <FruitsRow/>
  </SafeAreaView>
  )
}

export default Home;

