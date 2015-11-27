import * as ActionTypes from '../constants/GeneratorActionTypes';

const initialState = {
  form: {
    site: '',
    login: '',
    salt: ''
  },
  pass: ''
};

export default function generator(state = initialState, action = {}) {
  var form;

  switch (action.type) {
    case ActionTypes.GENERATOR_FORM__CHANGE:
      form = Object.assign({}, state.form);
      if (action.field) {
        form[action.field] = action.text;
      }

      return Object.assign({}, state, {
        form: form,
        pass: generatePass(form)
      });

    default:
      return state;
  }
}

function generatePass(form) {
  return hashCode('pass' + form.site + ':' + form.login + ':' + form.salt);
}

function hashCode(str) {
    var i, l,
        hval = 0x811c9dc5;

    for (i = 0, l = str.length; i < l; i++) {
        hval ^= str.charCodeAt(i);
        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }

    // Convert to 8 digit hex string
    return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
}
