<template>
    <div class="container">
      <div v-if="selectedItem" class="card">
        <img :src="selectedItem.image" alt="">
        <div class="itemCardText">
          <div class="title">{{ selectedItem.title }}</div>
          <div class="price">{{ selectedItem.price }}</div>
          <div class="body">{{ selectedItem.body }}</div>
          <MyButton class="button" @click="addToCart(selectedItem)"> Add to Cart</MyButton>
        </div>
      </div>
      <div v-else>
        <p>Item not found</p>
      </div>
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import {useRoute} from 'vue-router'
  import MyButton from '@/components/UI/MyButton.vue';
  import itemsJsonData from '../../public/items.json';

  const route = useRoute()
  const itemsJson = ref(itemsJsonData);
  const selectedItem = ref(null);
  const cart = ref([]);

  const addToCart = (item) =>{
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []; 
    cartItems.push(item); 
    localStorage.setItem('cart', JSON.stringify(cartItems)); 
  };

  const updateSelectedItem = () => {
    const itemId = parseInt(route.params.id);
    selectedItem.value = itemsJson.value.find(item => item.id === itemId);
  };

  onMounted(() =>{
    updateSelectedItem();
  })
</script>
  

<style scoped>
    img{
        width: 100%;
        max-width: 200px;
        height: auto;
        margin-bottom: 10px;
    }

    .card {
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 20px;
        margin-bottom: 20px;
    }

    .title{
        font-size: 24px;
        margin-bottom: 10px;
    }

    .body{
        font-size: 16px;
        margin-bottom: 10px;
    }

    .card .button {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
    }
</style>
  