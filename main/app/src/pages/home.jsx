// landing page for the blog app (home page)
import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from 'src/context/Blog';
import { useWallet } from 'src/context/wallet';
import { Button } from 'src/components/Button';
import { Post } from 'src/components/Post';
import { PostForm } from 'src/components/PostForm';
import { useConnection } from 'src/context/connection';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

export const Home = () => {
  const { connected, select } = useWallet();
  const {
    user,
    posts,
    initialized,
    initUser,
    createPost,
    showModal,
    setShowModal,
  } = useBlog();
  const { connection } = useConnection();
  const { wallet, publicKey } = useAnchorWallet();
  const { setVisible } = useWalletModal();

  return (
    <div className="home background-color overflow-auto h-screen">
      <header className="fixed z-10 w-full h-14  shadow-md">
        <div className="flex justify-between items-center h-full container">
          <h2 className="text-2xl font-bold">
            <div className="bg-clip-text bg-gradient-to-br from-indigo-300 colorpink">
              Onaki
            </div>
          </h2>
          {connected ? (
            <div className="flex items-center">
              <p className=" font-bold text-sm ml-2 capitalize underlinepink">
                Home
              </p>
              <p className=" font-bold text-sm ml-2 capitalize mr-4 underlinepink">
                Blog
              </p>
              <img
                src={user?.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full bg-gray-200 shadow ring-2 ring-indigo-400 ring-offset-2 ring-opacity-50"
              />
              <p className=" font-bold text-sm ml-2 capitalize">{user?.name}</p>
              {initialized ? (
                <Button
                  className="ml-3 mr-2"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Create Post
                </Button>
              ) : (
                <Button
                  className="ml-3 mr-2"
                  onClick={() => {
                    initUser();
                  }}
                >
                  Create Profile
                </Button>
              )}
            </div>
          ) : (
            <div className="flex items-center">
              <p className=" font-bold text-sm ml-2 capitalize underlinepink">
                Home
              </p>
              <p className=" font-bold text-sm ml-2 capitalize mr-4 underlinepink">
                Blog
              </p>
              <Button
                className="ml-3 mr-2"
                onClick={() => {
                  select();
                }}
              >
                Connect Wallet
              </Button>
            </div>
          )}
        </div>
      </header>
      <div className="container mt-20">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Welcome to Onaki</h1>
          <div className="flex items-center">
            <p className=" font-bold text-sm ml-2 capitalize underlinepink">
              Home
            </p>
            <p className=" font-bold text-sm ml-2 capitalize mr-4 underlinepink">
              Blog
            </p>
            <Button
              className="ml-3 mr-2"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Create Post
            </Button>
          </div>
        </div>
        <p className="text-gray-500 mt-2">
          Onaki is a social media platform that rewards you for your content.
        </p>
        <div className="mt-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Latest Posts</h2>
            <Link to="/posts" className="text-sm underlinepink">
              View All
            </Link>
          </div>
          <div className="mt-5">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      <PostForm
        visible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        onSubmit={createPost}
      />
    </div>
  );
};

// how to route to the home page from the app.jsx file
// Path: app/src/app.jsx
// main app component
