import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITITAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default ( state = INITITAL_STATE, action ) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};