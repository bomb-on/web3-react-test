import { Web3ReactProvider } from '@web3-react/core';
import { hooks, metaMask } from '../connectors/MetaMask';
import AppContextProvider from './ContextProvider';
import Wallet from './Wallet';


const connectors = [[metaMask, hooks]];

const App = () => {
  return (
    <Web3ReactProvider connectors={connectors}>
      <AppContextProvider>
        <Wallet />
      </AppContextProvider>
    </Web3ReactProvider>
  );
}

export default App;
