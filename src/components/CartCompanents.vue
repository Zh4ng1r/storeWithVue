<template>
    <div class="cart-container">
      <a href="#" class="cart-icon">
        <img src="../HeaderImage/cartImage.svg" alt="Cart Icon">
        <span class="cart-count">{{ contentDialog.length }}</span>
      </a>
  
      <div class="cart-sidebar" :class="{ 'cart-sidebar-open': isCartOpen }">
        <h2>Cart</h2>
        <div v-if="contentDialog.length === 0">Your cart is empty</div>
        <div v-else>
          <div v-for="item in contentDialog" :key="item.id" class="cart-item">
            <img :src="item.image" alt="Product Image">
            <div class="cart-item-details">
              <h4>{{ item.title }}</h4>
              <p>{{ item.price }}</p>
            </div>
            <div class="count__block">
            <button class="discrement" @click="discrement(item)">-</button>
            <div class="count">{{ item.count }} </div>
            <button class="increment" @click="increment(item)">+</button>
          </div>
            <button @click="removeFromCart(item.id)">Remove</button>
          </div>
        </div>
      </div>
      <div class="totalSum">
          Total : {{ totalSum }}
      </div>
    </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import jsonData from '../interface/jsonData'

  const isCartOpen = ref<boolean>(false);
  const contentDialog = ref<jsonData[]>([]);
  // const totalSum = ref();

  const removeFromCart = (id: number) => {
    contentDialog.value = contentDialog.value.filter(item => item.id !== id);
    console.log(contentDialog)
    saveInformation();
  };

  const saveInformation = () => {
    const dialogDataString = JSON.stringify(contentDialog.value);
    localStorage.setItem('cart', dialogDataString);
  };

  const loadLocalStorage = () => {
    const parsedLocalStorage = JSON.parse(localStorage.getItem('cart') || '{}');
    if (parsedLocalStorage) {
      contentDialog.value = parsedLocalStorage;
    } else {
      contentDialog.value = [];
    }
  };

  const increment = (item: jsonData) => {
    let findItem = contentDialog.value.find((cartItem) => cartItem.id === item.id);
    if(findItem){
    findItem.count += 1;
    saveInformation();
    }
  };

  const discrement = (item: jsonData) => {
    let findItem = contentDialog.value.find((cartItem) => cartItem.id === item.id);
    if(findItem){
    findItem.count -= 1;
    saveInformation();
    }
  }

  const totalSum = computed(() =>
    contentDialog.value.reduce((acc, item) => acc += parseFloat(item.price.replace('$', '')) * item.count, 0)
  )

  onMounted(() => {
    loadLocalStorage();
  });
</script>

  
  
<style scoped>

  h2{
    margin-bottom: 10px;
  }
  .cart-container {
    position: fixed;
    top: 0;
    width: 500px;
    height: 50vh;
    background-color: #fff;
    transition: right 0.3s ease;
    padding: 20px;
    border-radius: 10px;
  }
  
  .cart-icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: black;
  }
  
  .cart-icon img {
    width: 20px;
    height: 20px;
  }
  
  .cart-count {
    background-color: #4caf50;
    color: #fff;
    border-radius: 50%;
    font-size: 12px;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }
  
  .cart-sidebar-open {
    right: 0;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .cart-item img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    object-fit: cover;
  }
  
  button {
    background-color: #ff0000;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
  }

  .count__block{
    display: flex;
  }

  .increment , .discrement{
    cursor: pointer;
    
  }

  .increment{
    margin-left: 10px;
  }

  .discrement{
    margin-right: 10px;
  }

  .totalSum{
    display: flex;
    justify-content: center;
  }
</style>
  