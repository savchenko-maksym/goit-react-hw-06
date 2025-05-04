import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.contactWrap}>
      <div>
        <p className={s.userText}>
          <FaUser />
          {name}
        </p>
        <p className={s.userText}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
