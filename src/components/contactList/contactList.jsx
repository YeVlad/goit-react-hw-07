import Contact from "../contact/contact";

import { useSelector, useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector((state) =>
    selectFilteredContacts(state)
  );
  const dispatch = useDispatch();

  function delContact(id) {
    dispatch(deleteContacts(id));
  }

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            delContact={delContact}
          />
        );
      })}
    </ul>
  );
}
