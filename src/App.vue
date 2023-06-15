<template>
<headerBlock/>
<ProductList/>
</template>

<script>
import headerBlock from './components/Header.vue'
import ProductList from './components/ProductList.vue'
export default {
  components:{
    headerBlock, ProductList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Source+Sans+3:wght@700&display=swap');

body{
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: black;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
    width: 1710px;
    max-width: 100%;
    margin: 0 auto;
}
</style>
