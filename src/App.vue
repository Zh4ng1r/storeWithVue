<template>
    <div id="App">
      <HeaderBlock />
      <router-view />
    </div>
  </template>
  
  <script>
  import HeaderBlock from './components/HeaderComponent.vue';
  import mainPage from '@/pages/Main.vue'
  import ProductItem from './components/ProductItem.vue'
  export default {
    name: 'App',
    components:{
      mainPage,
      ProductItem,
      HeaderBlock
    }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Source+Sans+3:wght@700&display=swap');
  
  body{
    font-family: 'Inter', sans-serif;
    font-size: 14px;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: black;
  }
  
  .container{
      width: 1710px;
      max-width: 100%;
      margin: 0 auto;
  }
  </style>