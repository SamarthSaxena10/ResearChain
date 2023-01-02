import { FC, useMemo } from 'react';
import { BlogProvider } from 'src/context/Blog';
import { Router } from 'src/router';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import './App.css';

export const App = () => {
  const endpoint =
    'https://floral-few-layer.solana-devnet.discover.quiknode.pro/aa5177558fcb0c301b5b6dffb1d361eda117468d/';
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  // for disconnnecting the wallet use the disconnect method
  // const disconnect = () => {
  //   wallet.disconnect();
  // };

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
