import { db } from "../_utils/firebase";
import { collection, getDocs, query, addDoc } from "firebase/firestore";

export const getItems = async (userId) => {
    try {
        const itemsCollectionRef = collection(db, `users/${userId}/items`);
        const itemsSnapshot = await getDocs(itemsCollectionRef);

        const mappedItems = itemsSnapshot.docs.map((itemDoc) => ({
            id: itemDoc.id,
            ...itemDoc.data(),
        }));

        return mappedItems;
    } catch (fetchItemsError) {
        console.error("Error fetching items: ", fetchItemsError);
    }
};

export const addItem = async (userId, item) => {
    try {
        const itemsCollectionRef = collection(db, `users/${userId}/items`);
        const docRef = await addDoc(itemsCollectionRef, item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item: ", error);
    }
};