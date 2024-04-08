<script setup>
import { ref, defineEmits } from 'vue'
import axios from 'axios'
import StocksList from '../components/StocksList.vue'

// const emit = defineEmits(['create-stock'])
const fetchedStocks = ref([])
const searchStock = ref('')
const selectedStocks = ref(['MSFT','AMZN','GGL'])

// TODO define function that sends a request with text to the API call in the router/stocks/fetch
const fetchInfo = async () => {
  const {data} = await axios.get('http://localhost:3000/stocks/fetch', {
    params: {
      text: searchStock.value
    }
  })
  console.log(data);
} 


</script>

<template>
  <div> 
    <input 
    v-model="searchStock"
    type="text"
    placeholder="Search..."
    >
    <p>Search Stock:  {{ searchStock }}</p>
    <SearchInput v-model="searchStock" />
    <button @click="fetchInfo()">Search</button>
    <StocksList :stocks="selectedStocks"/>
  </div>
</template>

<style lang="scss">
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &:focus-within {
    box-shadow:
      0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8px 16px;
    border: none;
  }
}
</style>
