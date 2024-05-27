import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const Contact = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            <strong>{contact.name}: </strong>
            {contact.number}
          </p>
          <button
            className={styles.customBtn}
            onClick={() => onDeleteContact(contact.id)}
          >
            Usuń
          </button>
        </li>
      ))}
    </ul>
  );
};

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
