
export const initialStore = () => {
  return {
    slug: "cesar_arnetta",
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
    case 'addContact':
      return {
        ...store,
        contacts: [...store.contacts, action.addContact],
      };
      case 'createAgenda':
        return {
          ...store,
          slug: action.user,
        };
    case 'deleteContact':
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.id)
      };
      case 'deleteAgenda':
        return {
          ...store,
          slug: "" 
        };
        case 'clearContacts':
        return {
          ...store,
          contacts: [] 
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
