import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { GoogleAuthProvider, browserSessionPersistence, getAuth, setPersistence, signInWithPopup, signOut } from "firebase/auth";

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

// Cargar los datos de un producto cuyo id es x
export const getProductById = async (id) => {
  try {
    const productDocRef = doc(ProductosCollection, id);
    const productDoc = await getDoc(productDocRef);
    if(productDoc.exists()) {
      return { ...productDoc.data(), id: productDoc.id };
    } else {
      console.error('El producto con id dado no existe.');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el producto:', error);
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

export const editProduct = async (idProducto, newData) => {
  try {
    const productDocRef = doc(ProductosCollection, idProducto);
    await updateDoc(productDocRef, newData);
  } catch (error) {
    console.log(error);
  }
}

export const singWithGoogle = async (signInFirebase, setError, navigate) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    await setPersistence(auth, browserSessionPersistence);
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    signInFirebase(user);
    console.log(user);
    navigate("/");
  } catch (error) {
    setError(`Error  al iniciar sesión: ${error}`);
  }
};

export const cerrarSesion = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
}
