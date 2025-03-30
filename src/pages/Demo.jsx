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
            <TextField id="outlined-basic" label="name" variant="outlined" onChange={handleChange} name="name" value={contact.name} />
            <TextField id="outlined-basic" label="phone" variant="outlined" onChange={handleChange} name="phone" value={contact.phone} />
            <TextField id="outlined-basic" label="email" variant="outlined" onChange={handleChange} name="email" value={contact.email} />
            <TextField id="outlined-basic" label="address" variant="outlined" onChange={handleChange} name="address" value={contact.address} />
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
