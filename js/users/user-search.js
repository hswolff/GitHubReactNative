import React, {
  Component,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';

/**
 * Fetch a user's profile information from the GitHub API.
 * @param {string} username Username.
 * @return {Promise}
 */
function fetchUser(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then(resp => resp.json());
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {
    height: 40,
    marginBottom: 20,

    borderColor: '#D5D5D5',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputButtonContainer: {
    backgroundColor: '#F3F3F3',
    borderColor: '#D5D5D5',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputButtonText: {
    fontSize: 20,
    textAlign: 'center',
  },

  noUserText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },

  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  profileText: {
    fontSize: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
  },
});

export default class UserSearch extends Component {
  state = {
    text: '',
    fetching: false,
    user: { message: {} },
  };

  onChangeText = (text) => {
    this.setState({ text });
  };

  loadUser = () => {
    if (this.state.fetching) {
      return;
    }

    this.setState({
      fetching: true,
    });

    const { text } = this.state;

    fetchUser(text).then(user => {
      this.setState({
        fetching: false,
        user,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.text}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.loadUser}
        />
        <TouchableHighlight onPress={this.loadUser}>
          <View style={styles.inputButtonContainer}>
            <Text style={styles.inputButtonText}>
              {this.state.fetching ?
                'Loading...' :
                'Get User'
              }
            </Text>
          </View>
        </TouchableHighlight>

        <View style={styles.resultContainer}>
          {this.state.user && this.state.user.message ?
            <Text style={styles.noUserText}>No user found</Text> :
            <View style={styles.profileContainer}>
              <Text style={styles.profileText}>{this.state.user.login}</Text>
              <Image
                style={styles.profileImage}
                source={{
                  uri: this.state.user.avatar_url,
                }}
              />
            </View>
          }
        </View>
      </View>
    );
  }
}
