import { collection, getDocs } from "firebase/firestore";
import { database } from "../config/firebase";


//insert a fruit
const createFruit = async (fruit) => {
  try {
    const fruitsRef = collection(database, 'fruits');
    const newFruitRef = await addDoc(fruitsRef, fruit);
    console.log('New fruit added with ID:', newFruitRef.id);
    return newFruitRef.id;
  } catch (error) {
    console.error('Error creating new fruit:', error);
    return null;
  }
};


//get Fruits
const getFruitsData = async () => {
	try {
		const fruitsRef = collection(database, 'fruits');
		const snapshot = await getDocs(fruitsRef);
		const FruitsData = snapshot.docs.map((doc) => doc.data())
		return FruitsData;
	} catch (error) {
		console.error('Error fetching fruits data:', error);
		return [];
	}
}

export {
	getFruitsData,
	createFruit,
}