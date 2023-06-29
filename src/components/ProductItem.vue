<template>
  <div class="container">
    <div class="Product-list">
      <h2 class="cart">Cart:</h2>
      <aside class="sidebar">
        <div class="aside-content">
          <ul>
            <li v-for="category in state.categories" :key="category.category" @click="changeContent(category.category)">
              {{ category.category }}
            </li>
          </ul>
        </div>
      </aside>
      <h2 class="text-shoes">{{ getContentTitle() }}</h2>
      <div class="items">
        <div v-for="item in filteredItems" :key="item.id">
          <ProductItemHelper :item="item" @add-to-cart="addToCart"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, reactive } from 'vue';
import ProductItemHelper from './ProductItemHelper.vue';
import axios from 'axios';

const state = reactive({
  items: [],
  cart: [],
  categories: [
    { category: 'all' },
    { category: 'shoes' },
    { category: 'jackets' },
    { category: 't-shirt' }
  ],
  content: 'all'
});

const addToCart = (item) => {
  state.cart.push(item);
  saveCartToLocalStorage();
};

const saveCartToLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(state.cart));
};

const changeContent = (newContent) => {
  state.content = newContent;
};

const getContentTitle = () => {
  if (state.content === 'all') {
    return 'All Items';
  } else if (state.content === 'shoes') {
    return 'Shoes';
  } else if (state.content === 'jackets') {
    return 'Jackets';
  } else if (state.content === 't-shirt') {
    return 'T-shirt';
  }
};

const fetchData = async () => {
  try {
    const { data } = await axios.get('items.json');
    state.items = data;
  } catch (error) {
    state.items = [];
  }
};

const filteredItems = computed(() => {
  if (state.content === 'all') {
    return state.items;
  } else {
    return state.items.filter(
      item => item.category && item.category.toLowerCase() === state.content
    );
  }
});

onMounted(() => {
  fetchData();
});

</script>

<style scoped>
.Product-list {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px;
  align-self: start;
}

.cart {
  grid-column-start: 1;
}

.text-shoes {
  grid-column-start: 2;
  grid-row-start: 1;
}

.sidebar {
  grid-column-start: 1;
  background-color: #fff;
}

.aside-content ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.aside-content li {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
}

.items {
  grid-row-start: 2;
  grid-column-start: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
  text-decoration: none;
  color: black;
}
</style>