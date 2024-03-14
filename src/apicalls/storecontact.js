import { addDoc, collection, getDocs, query, where} from 'firebase/firestore';

import firestoreDB from '../firebaseConfig';

export const addContactInfo = async (detailsOfperson) => {

    try {

        await addDoc(collection(firestoreDB, 'doctors'), detailsOfperson);

        return {
            success: true,
            message: 'Your detail has been created successfully 😀😀. Now, please wait for approval from Admin'
        }
        
    } catch (error) {
        
        return {
            success: false,
            message: error?.message
        }

    };

};