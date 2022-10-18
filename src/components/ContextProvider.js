import { createContext, useEffect } from 'react';
import { metaMask } from '../connectors/MetaMask';

import useAppState from './useAppState';


export const AppContext = createContext();

const AppContextProvider = props => {
  const [state, dispatch] = useAppState();

  const initWallet = () => {
    metaMask.activate()
      .then(() => {
        console.log('MetaMask activated.');
        dispatch({ type: 'UPDATE_WALLET_STATUS', walletConnected: true });
      })
      .catch(() => {
        console.log('MetaMask not activated.');
        dispatch({ type: 'UPDATE_WALLET_STATUS', walletConnected: false });
      })
  };

  const actions = [];

  useEffect(() => {
    initWallet();
  }, []);

  return (
    <AppContext.Provider value={{ state, actions }}>
        {props.children}
    </AppContext.Provider>
  )
};

export default AppContextProvider;
