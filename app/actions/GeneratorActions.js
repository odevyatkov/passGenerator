import * as ActionTypes from '../constants/GeneratorActionTypes';

export function formChange(field, text) {
  return {
    type: ActionTypes.GENERATOR_FORM__CHANGE,
    field,
    text
  };
}
