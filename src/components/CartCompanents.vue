<template>
    <div class="cart-container">
      <a href="#" class="cart-icon" @click="toggleCart">
        <img src="./HeaderImage/cartImage.svg" alt="Cart Icon">
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
            <button @click="removeFromCart(item.id)">Remove</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';

  const isCartOpen = ref(false);
  const contentDialog = ref([]);

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;
  };

  const removeFromCart = (id) => {
    contentDialog.value = contentDialog.value.filter(item => item.id !== id);
    saveInformation();
  };

  const saveInformation = () => {
    const dialogDataString = JSON.stringify(contentDialog.value);
    localStorage.setItem('cart', dialogDataString);
  };

  const loadLocalStorage = () => {
    const parsedLocalStorage = JSON.parse(localStorage.getItem('cart'));
    if (parsedLocalStorage) {
      contentDialog.value = parsedLocalStorage;
    } else {
      contentDialog.value = [];
    }
  };

  onMounted(() => {
    loadLocalStorage();
  });
</script>

  
  
<style scoped>
  .cart-container {
    position: relative;
  }
  
  .cart-icon {
    display: flex;
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
  
  .cart-sidebar {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 50vh;
    background-color: #fff;
    transition: right 0.3s ease;
    padding: 20px;
    overflow-y: scroll;
    border-radius: 10px;
  }
  
  .cart-sidebar-open {
    right: 0;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .cart-item img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  
  .cart-item-details {
    flex-grow: 1;
  }
  
  button {
    background-color: #ff0000;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
  }
</style>
  