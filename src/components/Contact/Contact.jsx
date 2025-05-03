import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ name, number, id, onDelete }) => {
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
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
