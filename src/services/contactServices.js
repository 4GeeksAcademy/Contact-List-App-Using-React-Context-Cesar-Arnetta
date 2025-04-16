
const baseUrl = "https://playground.4geeks.com/contact/agendas/"

export const contactServices = {

    // GET funtions

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

    fetchContacts: async (dispatch,) => {

        try {
            const contacts = await contactServices.getContact();

            dispatch({ type: 'getContact', contacts: contacts });
            console.log(contacts);

        } catch (error) {
            console.log(error);
        }
    },

// POST funtion

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

    createAgenda: async (user) => {
        try {
            const request = await fetch(`${baseUrl}${user}`, {
                method: "POST",
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            const response = await request.json()
            console.log('API response:', response)
            console.log(response)
            return response
        } catch (error) {

        }
    },

    // DELETE funtion

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

    deleteAgenda: async (user) => {
        try {
            const request = await fetch(`${baseUrl}${user}?tags=Agenda%20operations&summary=Delete%20Agenda.&description=Deletes%20a%20specific%20agenda%20from%20the%20database.`, {
                method: "DELETE",
                headers: {
                    accept: 'application/json'
                }
            })
            const response = await request.json()
            console.log('API response:', response)
            console.log(response)
            return response
        } catch (error) {

        }
    },

    // PUT funtion

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

