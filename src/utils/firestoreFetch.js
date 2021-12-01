import { query, where, orderBy, collection, getDocs } from "firebase/firestore";
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


// COMENTAR TODO LO DE FIREBASE, CUANDO TERMINO DESAFIO 9 DESCOMENTARLO Y AVERIGUAR COMO LLAMAR A UN UNICO ITEM
// COMENTAR TODO LO DE FIREBASE, CUANDO TERMINO DESAFIO 9 DESCOMENTARLO Y AVERIGUAR COMO LLAMAR A UN UNICO ITEM

export default firestoreFetch;