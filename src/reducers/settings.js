import { ActionTypes } from '../constants';

const defaultSettings = {
  DRAWER: false,
  GENERATION: 'SM',
};
const settings = (state = defaultSettings, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SETTING:
      return {
        ...state,
        [action.name]: action.value,
      };
    case ActionTypes.TOGGLE_SETTING:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    default:
      return state;
  }
};

export default settings;
