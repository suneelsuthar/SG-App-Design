import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import firebaseApp from "../../FirebaseConfig";

const auth = getAuth(firebaseApp);

const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

const signInUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const signOutUser = () => signOut(auth);

const sendPasswordReset = (email) => {
  sendPasswordResetEmail(auth, email);
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

const subscribeToAuthChange = (handleAuthChange) => {
  onAuthStateChanged(auth, (user) => {
    handleAuthChange(user);
  });
};

const getUser = () => {
  if (auth.currentUser) {
    return auth.currentUser;
  }
};

const FirebaseAuthService = {
  registerUser,
  signInUser,
  signOutUser,
  sendPasswordReset,
  signInWithGoogle,
  subscribeToAuthChange,
  getUser,
};

export default FirebaseAuthService;
