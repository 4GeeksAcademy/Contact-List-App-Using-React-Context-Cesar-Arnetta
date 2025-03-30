
import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";



export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

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