import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { contactServices } from "../services/contactServices";
import { TextField } from "@mui/material";

const Card = ({ name, phone, email, address, id }) => {

    const { store, dispatch } = useGlobalReducer();
    const selectedAgenda = store.selectedAgenda;

    const handleDelete = async (e) => {
        try {
            const idContact = id;
            const deleteContact = await contactServices.deleteContact(idContact, selectedAgenda.slug);
            dispatch({ type: 'deleteContact', id: id });
        } catch (error) {
            console.error('Error al agregar contacto:', error);
        }
    };

    const [editing, setEditing] = useState(false)

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleEdit = async () => {
        setEditing(false)
        try {
            const editContact = {
                id: id,
                name: contact.name.trim(),
                phone: contact.phone.trim(),
                email: contact.email.trim(),
                address: contact.address.trim(),
            };
            console.log(editContact.id);

            const contactEdited = await contactServices.editContact(editContact.id, editContact, selectedAgenda.slug);
            dispatch({ type: 'contactEdited', contactEdited: contactEdited });
        } catch (error) {
            console.error('Error al agregar contacto:', error);
        }
    };

    return (
        <div className="card" style={{ width: "100%" }} >
            <div className="col m-2 p-2">
                <div className="row p-2 m-2">
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <img src="https://cdn.pixabay.com/photo/2025/03/18/06/17/snowy-cabin-9477457_1280.jpg" className="card-img-top" alt="..." style={{ borderRadius: "50%", objectFit: "cover", objectPosition: "center", width: "8rem", height: "8rem" }} />
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center flex-column">
                        {editing ? (
                            <>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    name="name"
                                    value={contact.name}
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Phone"
                                    variant="outlined"
                                    name="phone"
                                    value={contact.phone}
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    value={contact.email}
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Address"
                                    variant="outlined"
                                    name="address"
                                    value={contact.address}
                                    onChange={handleChange}
                                />
                                <div className="mt-2">
                                    <button className="btn btn-primary" onClick={handleEdit}>Save Changes</button>
                                    <button className="btn btn-danger" onClick={() => setEditing(false)}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2>{name}</h2>
                                <p>{phone}</p>
                                <p>{email}</p>
                                <p>{address}</p>
                            </>
                        )}
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-start">
                        <button className="btn btn-success" onClick={() => setEditing(true)}>Edit contact</button>
                        <button className="btn btn-danger" onClick={handleDelete}>Delete contact</button>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Card