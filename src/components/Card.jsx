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
        // Validación para el campo "Name": Solo letras y espacios
        if (name === "name" && /[^a-zA-Z ]/g.test(value)) {
            return;
        }

        // Validación para el campo "Phone": Solo números y formato 123-456-7890
        if (name === "phone" && /[^0-9]/g.test(value) && value !== "") {
            return;
        }

        // Validación para el campo "Email": Correo electrónico válido (no vamos a restringir la entrada, solo validar)
        if (name === "email") {

        }

        // Validación para el campo "Address": Permite letras, números y algunos caracteres especiales
        if (name === "address" && /[^a-zA-Z0-9\s,.-]/g.test(value)) {
            return;
        }
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

            const contactEdited = await contactServices.editContact(editContact.id, editContact);
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
                                    fullWidth
                                    required
                                    helperText="Solo letras y espacios"
                                />
                                <TextField
                                    label="Phone"
                                    variant="outlined"
                                    name="phone"
                                    value={contact.phone}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    type="tel"
                                    helperText="Formato: 123-456-7890"
                                />
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    value={contact.email}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    type="email"
                                    helperText="Ingrese un correo electrónico válido"
                                />
                                <TextField
                                    label="Address"
                                    variant="outlined"
                                    name="address"
                                    value={contact.address}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    helperText="Puede incluir números, letras, espacios y caracteres especiales como coma y punto"
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