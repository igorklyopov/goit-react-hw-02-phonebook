import style from "../ContactsList/ContactsList.module.css";

const ContactsList = ({ contacts, onDeleteContactBtnClick }) => {
  return (
    <ul className={style.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.contactsListItem}>
          <p>{name}: </p>
          <p>{number}</p>
          <button type="button" onClick={() => onDeleteContactBtnClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
