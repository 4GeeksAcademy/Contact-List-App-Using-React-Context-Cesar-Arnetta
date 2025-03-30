
export const initialStore = () => {
  return {
    selectedAgenda: "",
    slug: "",
    contacts: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'getContact':
      return {
        ...store,
        contacts: action.contacts,
      };
    // case 'getFiveContacts':
    //   return {
    //     ...store,
    //     slug: action.fiveContacts,
    //   };
    // case 'selectedAgenda':
    //   return {
    //     ...store,
    //     selectedAgenda: action.agenda,
    //   };
    case 'addContact':
      return {
        ...store,
        contacts: [...store.contacts, action.addContact],
      };
    case 'deleteContact':
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.id)
      };
    case 'contactEdited':
      return {
        ...store,
        contacts: [
          ...store.contacts.filter(contact => contact.id !== action.contactEdited.id),
          action.contactEdited,
        ],
      };
    default:
      throw Error('Unknown action.');
  }
}
