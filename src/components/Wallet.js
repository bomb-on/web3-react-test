import { useWeb3React } from '@web3-react/core';
import { Contract } from 'ethers';
import { useContext, useMemo, useState } from 'react';
import { AppContext } from './ContextProvider';


const Wallet = () => {
  const { state } = useContext(AppContext);
  const { abi, address, contractAddress, walletConnected } = state;
  const { provider } = useWeb3React();

  const signerOrProvider = useMemo(() => provider?.getSigner() || provider, [provider]);
  const myContract = new Contract(contractAddress, abi, signerOrProvider);
  const contract = signerOrProvider ? myContract.connect(signerOrProvider) : undefined;

  const [symbol, setSymbol] = useState('');
  const [balance, setBalance] = useState(0);

  if (contract) {
    contract.symbol().then(symbol => {
      setSymbol(symbol);
      contract.decimals().then(decimals => {
        contract.balanceOf(address).then(res => {
          setBalance(res.toString() / Math.pow(10, decimals));
        });
      });
    });
  }

  return (
    <div>
      <div>WALLET {walletConnected ? 'CONNECTED' : 'NOT CONNECTED'}</div>
      <div>BALANCE: {balance} {symbol}</div>
    </div>
  )
}

export default Wallet;
