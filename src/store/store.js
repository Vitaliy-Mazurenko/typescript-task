import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './taskReducerSlice';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
