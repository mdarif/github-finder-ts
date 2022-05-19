import { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

type AlertType = {
  msg: string;
  type: string;
};

export type AlertProviderType = {
  // children?: React.ReactNode;
  alert: AlertType | null;
  setAlert: (msg: string, type: string) => void;
};

const initialState: AlertProviderType = {
  alert: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAlert: () => {},
};

const AlertContext = createContext<AlertProviderType>(initialState);

export const AlertProvider = ({ children }: { children?: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set an alert
  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        alert: {
          msg,
          type,
        },
      },
    });

    setTimeout(
      () =>
        dispatch({
          type: 'REMOVE_ALERT',
        }),
      3000
    );
  };

  return (
    <AlertContext.Provider
      value={{
        ...state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
