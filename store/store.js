import {configureStore} from '@reduxjs/toolkit';
import favMonster from './favMonster';

export const store = configureStore({
  reducer: {
    favMonster: favMonster,
  },
});
