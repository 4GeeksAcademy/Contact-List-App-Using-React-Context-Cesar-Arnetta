import { Contacts } from "@mui/icons-material";

const baseUrl = "https://playground.4geeks.com/contact/agendas/"

export const contactServices = {

    // get funtions

    getContact: async () => {

        try {
         
            const request = await fetch(`${baseUrl}cesar_arnetta`, {
                headers: {
                    accept: 'application/json'
                }
            })
            const response = await request.json()
            console.log('API response:', response.contacts)
            console.log(response.contacts)
            return response.contacts
        } catch (error) {
            console.log(error);
        }
    },

    fetchContacts: async (dispatch, ) => {

        try {
            const contacts = await contactServices.getContact();
       
            dispatch({ type: 'getContact', contacts : contacts });
            console.log(contacts);
            
        } catch (error) {
            console.log(error);
        }
    },

//     getFisrtFiveContacts: async () => {
//         try {
//             const request = await fetch(`${baseUrl}?limit=5`, {
//                 headers: {
//                     accept: 'application/json'
//                 }
//             })
//             const response = await request.json()
//             console.log('API response:', response)
//             console.log(response)
//             const sortedContacts = response.agendas.sort((a, b) => b.id - a.id);
//             return sortedContacts
//         } catch (error) {
//             console.log(error);
//         }
//     },

//     fetchFiveContacts: async (dispatch) => {

//         try {
//             const fiveContacts = await contactServices.getFisrtFiveContacts();
//             dispatch({ type: 'getFiveContacts', fiveContacts : fiveContacts});
//         } catch (error) {
// console.log(error);

//         }
//     },

    createContact: async (contact) => {
        try {
            const request = await fetch(`${baseUrl}cesar_arnetta/contacts`, {
                method: "POST",
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: contact.name,
                    phone: contact.phone,
                    email: contact.email,
                    address: contact.address,
                }),
            });
            const response = await request.json()
            console.log('API response:', response)
            console.log(response)
            return response
        } catch (error) {

        }
    },

    deleteContact: async (id) => {
        try {
            const request = await fetch(`${baseUrl}cesar_arnetta/contacts/${id}`, {
                method: "DELETE",
                headers: {
                    accept: 'application/json'
                }
            })
            const response = await request.json()
            console.log('API response:', response)
            console.log(response.contacts)
            return response.contacts
        } catch (error) {

        }
    },
    editContact: async (id, contact) => {
        try {
            const request = await fetch(`${baseUrl}cesar_arnetta/contacts/${id}`, {
                method: "PUT",
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: contact.name,
                    phone: contact.phone,
                    email: contact.email,
                    address: contact.address,
                }),
            });
            const response = await request.json()
            console.log('API response:', response)
            console.log(response)
            return response
        } catch (error) {

        }
    },

}

