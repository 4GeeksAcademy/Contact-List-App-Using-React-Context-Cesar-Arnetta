// Import necessary components from react-router-dom and other parts of the application.
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { TextField } from "@mui/material";
import { useState } from "react";
import { contactServices } from "../services/contactServices";


export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  const navigate = useNavigate();


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newContact = {
        name: contact.name.trim(),
        phone: contact.phone.trim(),
        email: contact.email.trim(),
        address: contact.address.trim(),
      };
      const addContact = await contactServices.createContact(newContact);
      dispatch({ type: 'addContact', addContact: addContact });
    } catch (error) {
      console.error('Error al agregar contacto:', error);
    }
    navigate('/');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <ul className="list-group">
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
          </ul>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-success p-2 m-2">Save</button>
            <br />
            <Link to="/">
              <button className="btn btn-primary p-2 m-2">Back home</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
