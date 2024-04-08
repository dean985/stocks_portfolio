<script setup>
import { defineProps } from 'vue';

defineProps({
    stocks: Array,
})
</script>

<template>
    <text>Chosen Stocks</text>
    <ul class="list-container">
        <div v-for="stock in stocks" :key="stock">
            <li class="oval-container"> {{ stock }} </li>
        </div>
    </ul>
</template>

<style>
.oval-container {
    display: inline-block;
    padding: 5px 15px; /* Adjust padding as needed */
    border-radius: 20px; /* Adjust the radius to make it more oval */
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }

.list-container{
    display: flex; /* Use flexbox */
    flex-wrap: wrap; /* Allow wrapping */
    justify-content: center; /* Center the items horizontally */
    gap: 10px; /* Spacing between items */
    list-style-type: none; /* Remove default list styling */
    padding: 0;
}
</style>