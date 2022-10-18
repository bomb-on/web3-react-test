import { useReducer, useRef } from 'react';


const initialState = () => ({
  abi: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
  ],
  address: 'WALLET_ADDRESS',
  contractAddress: '0x7761E2338B35bCEB6BdA6ce477EF012bde7aE611',
  walletConnected: false,
});

let updatedState;

const reducer = (state, action) => {
  let result = {};
  switch (action.type) {
    case 'UPDATE_WALLET_STATUS':
      result = {
        ...state,
        walletConnected: action.walletConnected,
      };
      break;
    default:
      throw new Error();
  }

  updatedState.current = result;
  return result;
};

const useAppState = () => {
  const state = initialState();
  updatedState = useRef(state);
  return [...useReducer(reducer, state), updatedState];
};


export default useAppState;
