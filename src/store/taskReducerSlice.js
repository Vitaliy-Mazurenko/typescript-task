import { createSlice } from '@reduxjs/toolkit';

export const contactsReducer = createSlice({
  name: 'store',
  initialState: {
    items: [{
      id: 'id-1',
      name: 'Rosie Simpson',
      number: '459-12-56',
    }],
    filter: '',
  },
  reducers: {
    newContact: (state, action) => {
      state.items.push(action.payload);
    },
    delContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { newContact, delContact } = contactsReducer.actions;

export const phoneContacts = state => state.contacts.items;

export default contactsReducer.reducer;
