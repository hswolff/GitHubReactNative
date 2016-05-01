import React, {
  Image,
  StyleSheet,
  View,
} from 'react-native';

// Components
import UserSearch from './users/user-search';

// Images
import GitHubLogoImage from './images/github-logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  githubImage: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={GitHubLogoImage}
          style={styles.githubImage}
        />
      </View>

      <UserSearch />
    </View>
  );
}
