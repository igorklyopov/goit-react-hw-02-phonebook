import style from "../ContactsList/ContactsList.module.css";

const ContactsList = ({ contacts }) => {
  return (
    <ul className={style.contactsList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={style.contactsListItem}>
          <p>{contact.name}: </p>
          <p>{contact.number}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
