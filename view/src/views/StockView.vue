<script setup>
import StockSearch from "../components/StockSearch.vue"
</script>

<template>
  <main>
    <h1>Stocks Overview</h1>
    <StockSearch @create-stock="createStock()"/>
  </main>
</template>


<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
}
</style>