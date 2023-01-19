import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
// import contacts from 'Data/contacts.json';
import { phoneContacts, newContact, delContact } from '../store/taskReducerSlice';
import { useDispatch, useSelector} from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from 'components/App.module.css';

export const App = () => {
  const store = useSelector(phoneContacts);
  // console.log(phoneContacts);
  // const store = useSelector((state) => {
	// 	console.log(state);
  //   console.log(state.contacts);
  //   return state.contacts.items;
	// });
  console.log(store);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  // useEffect(() => {
    // const localContacts = localStorage.getItem('contacts');
    // const parsedContacts = JSON.parse(localContacts);
    // console.log(parsedContacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    } else {
      localStorage.setItem('contacts', JSON.stringify(store));
    }
  }, [store]);

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const addContact = (name, number) => {
    const isInclude = store.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (isInclude) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(newContact(contact));
  };

  const deleteContact = contactId => {
    dispatch(delContact(contactId));
  };

  const searchContact = filter.toLowerCase();
  const filteredContacts = store
    .filter(contact => contact.name.toLowerCase().includes(searchContact))
    .sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    );
    // console.log(filteredContacts);

  return (
    <div className={css.thumb}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};
