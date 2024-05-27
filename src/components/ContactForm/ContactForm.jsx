import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

const ContactForm = ({ contacts, addContact }) => {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameValue.trim() || !numberValue.trim()) return;

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === nameValue.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${nameValue} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name: nameValue, number: numberValue };
    addContact(newContact);

    setNameValue('');
    setNumberValue('');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          id="number"
          value={numberValue}
          onChange={e => setNumberValue(e.target.value)}
          required
        />
      </div>
      <button className={styles.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;
