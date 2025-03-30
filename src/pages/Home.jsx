import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { contactServices } from "../services/contactServices.js";


export const Home = () => {
    const { store, dispatch } = useGlobalReducer();
//   const [loading, setLoading] = useState(false); // Estado de carga
//   const [localContacts, setLocalContacts] = useState([]); // Estado local para contactos

//   console.log(store.contacts);
//   console.log(store.slug);


//   const selectedAgenda = store.selectedAgenda;
// console.log(selectedAgenda);


// useEffect(() => {
//     // Verificar si `selectedAgenda` tiene un valor válido
//     if (selectedAgenda && Object.keys(selectedAgenda).length > 0) {
//         if (localContacts.length === 0) { // Solo hacer la llamada si no hay contactos cargados aún
//             setLoading(true); // Activar estado de carga
//             contactServices.fetchContacts(dispatch, selectedAgenda) // Pasar el objeto completo de selectedAgenda si es necesario
//                 .then((response) => {
//                     console.log("API Response:", response);
                    
//                     // Acceder a `contacts` directamente desde la respuesta
//                     if (response && Array.isArray(response.contacts)) {
//                         setLocalContacts(response.contacts); // Actualizar el estado con los contactos
//                     } else {
//                         console.error("No se encontraron contactos en la respuesta o la estructura es incorrecta.", response);
//                     }
//                     setLoading(false); // Desactivar estado de carga
//                 })
//                 .catch((error) => {
//                     console.error("Error al obtener los contactos:", error);
//                     setLoading(false); // Desactivar estado de carga
//                 });
//         }
//     } else {
//         console.log("selectedAgenda no está configurado o está vacío.");
//     }
// }, [selectedAgenda, localContacts.length, dispatch]);

// console.log(localContacts);

  return (
    <div className="text-center mt-5">
      {/* Verificación de si hay una agenda seleccionada y si hay contactos disponibles
      {!selectedAgenda ? (
        <p>No has seleccionado ninguna agenda. Por favor, selecciona una agenda para ver los contactos.</p>
      ) : loading ? (
        // Mostrar un mensaje o spinner mientras se cargan los contactos
        <p>Cargando contactos...</p>
      ) : (
        // Mostrar los contactos si están disponibles */}

        {
			store.contacts.map((i) => {
            return (
              <Card
                key={i.id}
                name={i.name}
                phone={i.phone}
                email={i.email}
                address={i.address}
                id={i.id}
              />
        //     );
        //   })
        // ) : (
        //   <p>No hay contactos disponibles en esta agenda.</p>
        )})}
    </div>
  );
};