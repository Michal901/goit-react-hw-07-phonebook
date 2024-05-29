import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameValue.trim() || !numberValue.trim()) return;

    const newContact = { name: nameValue, phone: numberValue };
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
        <label htmlFor="phone">Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
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
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
