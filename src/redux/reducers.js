import { addContact, deleteContact, fetchContacts } from './operations';

export const addContactReducer = builder => {
  builder
    .addCase(addContact.pending, state => {
      state.contacts.isLoading = true;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
};

export const deleteContactReducer = builder => {
  builder
    .addCase(deleteContact.pending, state => {
      state.contacts.isLoading = true;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
};

export const fetchContactsReducer = builder => {
  builder
    .addCase(fetchContacts.pending, state => {
      state.contacts.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
};
