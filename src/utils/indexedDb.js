// src/utils/indexedDb.js
import { openDB } from 'idb';

// Abre (o crea) una base de datos
export const openDatabase = async () => {
  return openDB('myDatabase', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('items')) {
        // Crear un almacén de objetos llamado 'items'
        db.createObjectStore('items', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

// Añadir un item a la base de datos
export const addItem = async (item) => {
  const db = await openDatabase();
  return db.add('items', item);
};

// Obtener todos los items de la base de datos
export const getAllItems = async () => {
  const db = await openDatabase();
  return db.getAll('items');
};

// Obtener un item por su ID
export const getItemById = async (id) => {
  const db = await openDatabase();
  return db.get('items', id);
};

// Actualizar un item
export const updateItem = async (id, updatedItem) => {
  const db = await openDatabase();
  return db.put('items', { ...updatedItem, id });
};

// Eliminar un item por su ID
export const deleteItem = async (id) => {
  const db = await openDatabase();
  return db.delete('items', id);
};
