import css from './ContactForm.module.css';
import { useState } from 'react';

export const ContactForm = ({ handleAddContact }) => {
  // state = {
  //   name: '',
  //   number: '',
  // };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    // this.setState({ [evt.target.name]: evt.target.value });
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  };

  const resetForm = () => {
    // this.setState({ name: '', number: '' });
    setName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    // evt.preventDefault();
    // const { name, number } = this.state;

    // this.props.handleAddContact(name, number, this.resetForm);
    evt.preventDefault();
    handleAddContact(name, number, resetForm);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Enter name"
        required
        value={name}
        onChange={handleChange}
        pattern="^[A-Za-zА-Яа-яЇїІі\s]+$"
        title="You can enter only letters of the Latin and Cyrillic alphabets, as well as spaces."
      />
      <input
        className={css.input}
        type="tel"
        name="number"
        placeholder="Enter number"
        required
        value={number}
        onChange={handleChange}
        pattern="^(\+?\d+){5,12}$"
        title="Phone number must start with '+' (optional) and contain only digits. Length: 5-12 characters."
      />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
