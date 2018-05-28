import {ActionTypes} from '../constants';

export const changeSetting = (name, value) => ({
    type: ActionTypes.CHANGE_SETTING,
    name,
    value
});

export const toggleSetting = (name) => ({
    type: ActionTypes.TOGGLE_SETTING,
    name
});
