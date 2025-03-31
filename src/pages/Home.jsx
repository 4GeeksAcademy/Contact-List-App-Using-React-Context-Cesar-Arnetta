
import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { contactServices } from "../services/contactServices.js";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();


	 const [loading, setLoading] = useState(true);

//Carga inicial de agenda, sino estuviese creada

	 useEffect(() => {
	   const fetchData = async () => {
		 try {
		   const user = "cesar_arnetta";
		   await contactServices.createAgenda(user);
		   dispatch({ type: 'createAgenda', slug: user });
		   setLoading(false);
		 } catch (error) {
		   console.error("Error al cargar la agenda:", error);
		   setLoading(false); 
		 }
	   };
	   fetchData(); 
	 }, [dispatch]); 
   
	 if (loading) {
	   return <h1>Cargando...</h1>; 
		 }
   
	return (
		<div className="text-center mt-5">
			{store.contacts.map((i) => {
				return (
					<Card
						key={i.id}
						name={i.name}
						phone={i.phone}
						email={i.email}
						address={i.address}
						id={i.id}
					/>
				)
			})}
		</div>
	);
};