import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";

const initialState = {
  list: [
    
  ],
};

export const loadDictionary = (dictionary_list) => {
  return {
    type: LOAD,
    dictionary_list,
  };
};

export const createDictionary = (dictionary) => {
  return {
    type: CREATE,
    dictionary,
  };
};

//middlewares

export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "mydictionary"));
    // console.log(dictionary_data);

    let dictionary_list = [];
    dictionary_data.forEach((b) => {
      // console.log(b.data());
      dictionary_list.push({ id: b.id, ...b.data() });
    });

    console.log(dictionary_list);
    dispatch(loadDictionary(dictionary_list));
  };
};

export const addBDictionaryFB = (dictionary) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "mydictionary"), dictionary);
    // const _dictionary = await getDoc(docRef);
    const dictionary_data = { id: docRef.id, ...dictionary };
    console.log(dictionary_data);
    dispatch(createDictionary(dictionary_data))
  };


};



export const updateDictionaryFB = (dictionary_id) => {
  return function (dispatch) {
    console.log(dictionary_id);
  };
};


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD":
      return { list: action.dictionary_list };

    case "dictionary/CREATE":
      const new_dictionary_list = [...state.list, action.dictionary];
      return { list: new_dictionary_list };
    default:
      return state;
  }
}
