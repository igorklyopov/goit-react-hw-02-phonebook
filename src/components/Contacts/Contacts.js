import style from "../Contacts/Contacts.module.css";

const Contacts = ({ contacts }) => {
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

export default Contacts;
