import { initializeApp } from 'firebase/app';
import { getFirestore,collection,getDocs,addDoc } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk7g-hBPBlAQPTLjUfvPwbjbagjDNx3aM",
    authDomain: "test-e8417.firebaseapp.com",
    projectId: "test-e8417",
    storageBucket: "test-e8417.firebasestorage.app",
    messagingSenderId: "264278535120",
    appId: "1:264278535120:web:f977fe92a434c343e167d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collectionName = "project";

const getAllProjects = () => {
  const projectCollection = collection(db, collectionName);
  console.log(projectCollection);
  return getDocs(projectCollection)
};

const addProject = (project) => {
  const projectCollection = collection(db, collectionName);
  return addDoc(projectCollection, project);
};

export { getAllProjects, addProject };