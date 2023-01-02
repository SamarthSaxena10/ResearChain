import { PublicKey } from '@solana/web3.js';
// display key exporting the function displayKey
export const displayKey = (pubKey) => {
  const key = pubKey.toString();

  return key.length > 20
    ? `${key.substring(0, 4)}...${key.substring(key.length - 4, key.length)}`
    : key;
};
