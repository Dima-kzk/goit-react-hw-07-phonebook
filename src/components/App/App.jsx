import { Section } from 'components/Section/Section';
import { Сentralizer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Сentralizer>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <>
            <p>No contacts.</p>
            <p>You can add contacts.</p>
          </>
        )}
      </Section>
    </Сentralizer>
  );
};
