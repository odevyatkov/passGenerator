import React, { Component, PropTypes, View, StyleSheet } from 'react-native';

import FieldRow from './FieldRow';

class GeneratorForm extends Component {
  render() {
    const { form, onFormChange } = this.props;

    return (
      <View style={styles.container}>
        <FieldRow
          title={"Site"}
          value={form.site}
          onChange={(text) => onFormChange('site', text)}
        />
        <FieldRow
          title={"Login"}
          value={form.login}
          onChange={(text) => onFormChange('login', text)}
        />
        <FieldRow
          title={"Salt"}
          value={form.salt}
          onChange={(text) => onFormChange('salt', text)}
          secureTextEntry={true}
        />
      </View>
    );
  }
}

GeneratorForm.propTypes = {
  form: PropTypes.object.isRequired,
  onFormChange: PropTypes.func.isRequired
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

export default GeneratorForm;
