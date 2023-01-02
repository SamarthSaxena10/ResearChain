import md5 from 'md5'; // using md5 encryption standard for randomizing the avatar

export const getAvatarUrl = (key) => {
  return `https://gravatar.com/avatar/${md5(key)}?s=400&d=robohash&r=x`; // returns the avatar url
};
