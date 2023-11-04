import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDeleteContact }) => (
  <ul className={css.list}>
    {contacts.length > 0 ? (
      contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <a className={css.link} href={`tel:${contact.number}`}>
            {contact.name}: {contact.number}
          </a>
          <button
            className={css.button}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))
    ) : (
      <h3 className={css.subtitle}>No contacts found.</h3>
    )}
  </ul>
);
