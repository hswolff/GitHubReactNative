import React, {
  PropTypes,
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    borderColor: '#D5D5D5',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default function Button(props) {
  const {
    onPress,
    text,
  } = props;

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
