import initialContacts from "./data/contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setInitialContacts } from "./redux/contactsSlice";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  // Ініціалізація контактів із localStorage або початкового json
  useEffect(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    const contactsToSet = savedContacts
      ? JSON.parse(savedContacts)
      : initialContacts;
    dispatch(setInitialContacts(contactsToSet));
  }, [dispatch]);

  // Синхронізація Redux-стану з localStorage
  useEffect(() => {
    if (contacts.length > 0) {
      window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
