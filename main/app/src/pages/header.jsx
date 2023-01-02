// create a header component to display the header of the app

import { Link } from 'react-router-dom';
import { useWallet } from 'src/context/wallet';
import { useBlog } from 'src/context/Blog';
import { Button } from 'src/components/Button';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

export const Header = () => {
  const { connected, select } = useWallet();
  const { user, initialized } = useBlog();
  const { setVisible } = useWalletModal();

  return (
    <header className="fixed z-10 w-full h-14  shadow-md">
      <div className="flex justify-between items-center h-full container">
        <h2 className="text-2xl font-bold">
          <div className="bg-clip-text bg-gradient-to-br from-indigo-300 colorpink">
            Onaki
          </div>
        </h2>
        {connected ? (
          <div className="flex items-center">
            <Link to="/">
              <p className=" font-bold text-sm ml-2 capitalize underlinepink">
                Home
              </p>
            </Link>
            <Link to="/blog">
              <p className=" font-bold text-sm ml-2 capitalize mr-4 underlinepink">
                Blog
              </p>
            </Link>
            <img
              src={user?.avatar}
              alt="avatar"
              className="w-8 h-8 rounded-full bg-gray-200 shadow ring-2 ring-indigo-400 ring-offset-2 ring-opacity-50"
            />
            <p className=" font-bold text-sm ml-2 capitalize">{user?.name}</p>
            {initialized ? (
              <Link to="/create-post">
                <Button className="ml-3 mr-2">Create Post</Button>
              </Link>
            ) : null}
          </div>
        ) : (
          <Button onClick={() => setVisible(true)}>Connect Wallet</Button>
        )}
      </div>
    </header>
  );
};
