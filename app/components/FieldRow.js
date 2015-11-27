import React, { Component, PropTypes, View, Text, StyleSheet, TextInput } from 'react-native';

class FieldRow extends Component {
  render() {
    const { title, value, onChange, secureTextEntry } = this.props;

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(text) => onChange(text)}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
}

FieldRow.propTypes = {
  secureTextEntry: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

FieldRow.defaultProps = {
  secureTextEntry: false
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },

  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#f9f9f9',
    position: 'relative'
  },

  rotate: {
    transform: [{rotate: '180deg'}]
  },

  aside: {
    width: 57,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center'
  },

  counter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  content: {
    fontSize: 150
  },

  asideText: {
    fontSize: 50
  },

  contentMin: {
    color: '#f00'
  }
});

export default FieldRow;
