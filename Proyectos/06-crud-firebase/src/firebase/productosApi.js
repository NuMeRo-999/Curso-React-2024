import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { GoogleAuthProvider, browserSessionPersistence, getAuth, setPersistence, signInWithPopup } from "firebase/auth";
import { AuthContextProduct } from "../context/authContextProduct";

// -- Datos de la colección --
const ProductosCollection = collection(db ,'Crud-react-productos')

// -- Añadir Productos --

export const addProducto = async (productoData) => {
  try {
    const docRef = await addDoc(ProductosCollection, productoData)
    return docRef.id;
  } catch (error) {
    console.log('Error al añadir un producto ',error);
    throw error;
  }
}

export const getProductos = async () => {
  try {
    const data = await getDocs(ProductosCollection);
    const productos = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return productos;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
}

export const eliminarProducto = async (idProducto) => {
  try {
    await deleteDoc(doc(ProductosCollection, idProducto));
    console.log('Producto eliminado correctamente');
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    throw error;
  }
}

export const singWithGoogle = async (setError, navigate) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
      await setPersistence(auth, browserSessionPersistence);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const { singInFirebase } = AuthContextProduct(); // Accede a la función del contexto
      singInFirebase(user); // Llama a la función con el usuario
      console.log(user);
      navigate('/');
  } catch (error) {
      setError(`Error al iniciar sesión: ${error}`);
  }
}
