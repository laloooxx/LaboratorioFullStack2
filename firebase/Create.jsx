import React, { useState } from 'react';
import { db } from './Firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';


const Create = () => {
    const [data, setData] = useState("");

    const handleCreate = async () => {
        try {
            
            const docRef = await addDoc(collection(db, "docs"), {
                doc: data,
            });
            console.log("Documento creado con el ID: ", docRef.id);
            setData("");
            const querySnapshot = await getDocs(collection(db, "docs"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`)
            });
        } catch (error) {
            console.error("Error al crear el documento:", error);
        }
    }

    return (
        <div>
            <input type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            />
            <button onClick={handleCreate}>Crear</button>
        </div>
    )
};

export default Create;