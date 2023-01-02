// generating pre-defined names for the user to choose from

import nameGenerator from '@afuggini/namegenerator';

export const getRandomName = () => {
  return nameGenerator(' ');
};
