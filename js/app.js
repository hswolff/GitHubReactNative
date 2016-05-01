import React, {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  comingSoon: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to GitHubReactNative
      </Text>
      <Text style={styles.comingSoon}>
        More to come...
      </Text>
    </View>
  );
}
