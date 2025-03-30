import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";
import { contactServices } from "../services/contactServices";


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	// const [agenda, setAgenda] = useState(false)

	// const [selectedAgenda, setSelectedAgenda] = useState(null)

// console.log(store)

// 	const handleAgendaClick = async (agenda) => {
//         try {
//             // Actualizamos la agenda seleccionada en el estado global
//             setSelectedAgenda(agenda);
//             dispatch({ type: 'selectedAgenda', agenda});

//             // Usamos fetchContacts del servicio para obtener y despachar los contactos
//             await contactServices.fetchContacts(dispatch, agenda.slug);
// 			console.log(agenda.slug);
//         } catch (error) {
//             console.error('Error al seleccionar agenda:', error);
//         }
//     }

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				{/* {selectedAgenda ? (
					<div>
						<p>Agenda Seleccionada:</p>
						<p>{selectedAgenda.slug}</p>
					</div>
				) : (
					<p>No se ha seleccionado ninguna agenda.</p>
				)}
				{agenda && store.slug.length > 0 ? 
				(
					<>

						<button className="btn btn-success" onClick={() => setAgenda(false)}>Cancel</button>
						<ul className="list-group p-2 m-2" style={{ backgroundColor: "white" }}>
							{store.slug.map((contact, index) => (
								<li key={index}
									className="list-group border p-2 m-2"
									style={{ listStyle: "none", paddingLeft: "0px", cursor: "pointer", transition: "background-color 0.3s, box-shadow 0.3s", fontSize: "1rem" }}
									onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
									onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
									onClick={() => handleAgendaClick(contact)}>
									{contact.slug}</li>
							))}
						</ul>
					</>) : (
					<button className="btn btn-success" onClick={() => setAgenda(true)}>Choose another agenda</button>
				)}*/}

				<div className="ml-auto"> 
					<Link to="/demo">
						<button className="btn btn-success">Add new contact</button>
					</Link>
				</div>
			</div>
		</nav >
	);
};