import { AlertProviderType } from './AlertContext';

const alertReducer = (
  state: AlertProviderType,
  action: any
): AlertProviderType => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload;
    case 'REMOVE_ALERT':
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
