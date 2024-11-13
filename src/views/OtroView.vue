<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { addItem, getAllItems, deleteItem } from '@/utils/indexedDb';

// Definir las variables reactivas
const newItem = ref('');
const items = ref([]);

// Función para agregar un nuevo item
const addNewItem = async () => {
  if (!newItem.value) return;
  const newItemObj = { name: newItem.value };
  await addItem(newItemObj);
  newItem.value = ''; // Limpiar el campo de entrada
  fetchItems(); // Actualizar la lista
};

// Función para obtener todos los items
const fetchItems = async () => {
  items.value = await getAllItems();
};

// Función para eliminar un item
const deleteItemHandler = async (id) => {
  await deleteItem(id);
  fetchItems(); // Actualizar la lista después de eliminar
};

// Cargar los items cuando el componente se monta
onMounted(() => {
  fetchItems(); // Cargar items al montar el componente
});


</script>

<template>
   <div>
 
     
     <form @submit.prevent="addNewItem">
       <input v-model="newItem" placeholder="Nuevo item" />
       <button type="submit">Agregar Item</button>
     </form>
 
     <ul>
       <li v-for="item in items" :key="item.id">
         {{ item.name }}
         <button @click="deleteItemHandler(item.id)">Eliminar</button>
       </li>
     </ul>
   </div>
 </template>

<style scoped>
/* Agrega estilos si lo necesitas */
</style>