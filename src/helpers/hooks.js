/*
import { useWeb3React } from '@web3-react/core';
import { Contract } from 'ethers';
import { useEffect, useState } from 'react';
import { usePriorityConnector, usePriorityProvider } from '../components/App';


const getContract = (address, abi, provider) => (new Contract(address, abi, provider));

export const useContract = (address, abi) => {
  const { provider } = useWeb3React();
  const signerOrProvider = useMemo(() => provider?.getSigner() || provider, [provider]);

  return useMemo(
    () => (address && signerOrProvider) && getContract(address, abi, signerOrProvider),
    [address, abi, signerOrProvider]
  );
}

export const useContract0 = c => {
  const connector = usePriorityConnector();
  const provider = usePriorityProvider();

  if (c) {

    let contract = c.connect(provider);

    // console.log(contract)
    //if (getConnectorName(connector) !== "Network") {
    const signer = provider?.getSigner?.();
    if (signer !== undefined) contract = contract.connect(signer);
    //}

    return contract;
  }
};
*/
