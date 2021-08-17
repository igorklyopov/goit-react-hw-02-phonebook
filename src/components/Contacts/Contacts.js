import style from "../Contacts/Contacts.module.css";

const Contacts = ({ contacts }) => {
  return (
    <ul className={style.contactsList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={style.contactsListItem}>
          {contact.name}
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
