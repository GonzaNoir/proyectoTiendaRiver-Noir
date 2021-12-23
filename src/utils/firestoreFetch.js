import { query, where, orderBy, collection, getDocs} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebaseConfig";

const firestoreFetch = async (categoryId) =>{
    let q;
    if(categoryId){
        q = query(collection(db, "Item"), where('categoryId' , '==', categoryId));
    } else {
        q = query(collection(db, "Item"), orderBy('tittle'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFireStore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFireStore;
}

export const firestoreFetchItem = async (idItem) => {
    const docRef = doc(db, "Item", idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        return {
            id: idItem,
            ...docSnap.data()
        }
    }else{
        console.log("No hay ningun documento.");
    }
}


export default firestoreFetch;