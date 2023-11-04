import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

const exampleConact = [
  { id: 'id-1', name: 'Example Contact', number: '123-456-789' },
];

export const App = () => {
  // state = {
  //   contacts: [{ id: 'id-1', name: 'Example Contact', number: '123-456-789' }],
  //   filter: '',
  // };
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const parsedContacts =
      JSON.parse(localStorage.getItem('contacts')) ?? exampleConact;
    return parsedContacts;
  });

  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts) {
  //     this.setState({ contacts });
  //   }
  // }

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  // componentDidUpdate(_, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const handleAddContact = (name, number, resetForm) => {
    // const { contacts } = this.state;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`A contact with the name "${name}" already exists.`);
      return;
    }

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    setContacts([...contacts, newContact]);
    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, newContact],
    // }));
    resetForm(); //передав з ContactForm.jsx щоб скинути форму тільки за умови якщо контакт додався, якщо вибило алерт на 32стрічці -  то щоб не сикдалось.
  };

  const handleDeleteContact = id => {
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== id),
    // }));
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = evt => {
    // this.setState({ filter: evt.target.value.toLowerCase() });
    setFilter(evt.target.value.toLowerCase());
  };

  const getFilteredContacts = () => {
    // const { contacts, filter } = this.state;
    // return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter)
    // );
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
