import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={s.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={s.contactItem} key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
