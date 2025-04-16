import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { contactServices } from "../services/contactServices";


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	const deleteAgenda = async (user) => {
		try {
			const user = "cesar_arnetta";;
			const deleteAgenda = await contactServices.deleteAgenda(user);
			dispatch({ type: 'deleteAgenda' });
			dispatch({ type: 'clearContacts' });
		} catch (error) {

		}
	}

	const createAgenda = async (user) => {
		try {
			const user = "cesar_arnetta";;
			const createAgenda = await contactServices.createAgenda(user);
			dispatch({ type: 'createAgenda', slug : user });
		} catch (error) {

		}
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				{store.slug !== "" ? (<><p>{store.slug}</p> <button className="btn btn-danger" onClick={deleteAgenda}>Delete agenda</button></>) :
					(<><p>There is not agenda created</p> <button className="btn btn-success" onClick={createAgenda}>Create agenda</button></>)}
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-success">Add new contact</button>
					</Link>
				</div>
			</div>
		</nav >
	);
};