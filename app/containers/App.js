import React, { Component, PropTypes, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';

import * as GeneratorActions from '../actions/GeneratorActions';

import GeneratorForm from '../components/GeneratorForm';

class App extends Component {
  render() {
    const { generator, dispatch } = this.props;
    const generatorActions = bindActionCreators(GeneratorActions, dispatch);

    return (
      <View style={styles.container}>
        <GeneratorForm
          form={generator.form}
          onFormChange={generatorActions.formChange.bind(null)}
        />
        <Text>Your pass: {generator.pass}</Text>
      </View>
    );
  }
}

App.propTypes = {
  generator: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f9f9f9'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

function mapStateToProps(state) {
  return {
    generator: state.generator
  };
}

export default connect(mapStateToProps)(App);
