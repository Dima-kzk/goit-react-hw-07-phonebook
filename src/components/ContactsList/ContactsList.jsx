import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = [...contacts];

  function getFilterContacts() {
    if (contacts.length > 0) {
      return filteredContacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  }

  return (
    <ul>
      {getFilterContacts().map(({ name, number, id }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
