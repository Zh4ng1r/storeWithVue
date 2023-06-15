<template>
    <div class="container">
        <div class="Product-list">
            <h2 class="cart">Cart:</h2>
            <aside class="sidebar">
                <div class="aside-content">
                    <router-link to="/shoes">Sneakers</router-link>
                    <router-link>Jackets</router-link>
                    <router-link>T-Shirt</router-link>
                </div>
            </aside>
            <h2 class="text-shoes">All ITems</h2>
            <div class="items">
                <div class="item">
                    <ProductItemHelper 
                    v-for="item in items" :key="item.id" 
                    :item="item" 
                    @add-to-cart="addToCart" />
                </div>


                <!-- <div v-for="item in filteredItems('shoes')" :key="item.id">
                    <ProductItemHelper :item="item" @add-to-cart="addToCart" />
                    </div>
                </div>
            
                <h2>Jackets</h2>
                <div class="item">
                    <div v-for="item in filteredItems('jackets')" :key="item.id">
                    <ProductItemHelper :item="item" @add-to-cart="addToCart" />
                    </div>
                </div>
            
                <h2>T-Shirt</h2>
                <div class="item">  
                    <div v-for="item in filteredItems('t-shirt')" :key="item.id">
                    <ProductItemHelper :item="item" @add-to-cart="addToCart"/>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
  
<script>
import ProductItemHelper from './ProductItemHelper.vue';

export default {
    data() {
      return {
        items: [
          { id: 1, title: "Running shoes for men", price: "$99", image: require("./productItemsImage/item1.jpg"), category:"shoes"},
          { id: 2, title: "Jackets", price: "$120", image: require("./productItemsImage/jacket1.jpg"), category:"jackets"},
          { id: 3, title: "Jackets", price: "$110", image: require("./productItemsImage/jacket5.jpg"), category:"jackets"},
          { id: 4, title: "Running shoes for men", price: "$34", image: require("./productItemsImage/item3.jpg"), category:"shoes"},
          { id: 5, title: "T-shirt", price: "$110", image: require("./productItemsImage/T-shirt1.jpg"), category:"t-shirt"},
          { id: 6, title: "Running shoes for men", price: "$62", image: require("./productItemsImage/item4.jpg"), category:"shoes"},
          { id: 7, title: "Jackets", price: "$85", image: require("./productItemsImage/jacket2.jpg"), category:"jackets"},
          { id: 8, title: "Running shoes for men", price: "$76", image: require("./productItemsImage/item5.jpg"), category:"shoes"},
          { id: 9, title: "Jackets", price: "$99", image: require("./productItemsImage/jacket3.jpg"), category:"jackets"},
          { id: 10, title: "T-shirt", price: "$110", image: require("./productItemsImage/T-shirt5.jpg"), category:"t-shirt"},
          { id: 11, title: "Jackets", price: "$78", image: require("./productItemsImage/jacket4.jpg"), category:"jackets"},
          { id: 12, title: "T-shirt", price: "$110", image: require("./productItemsImage/T-shirt3.jpg"), category:"t-shirt"},
          { id: 13, title: "Running shoes for men", price: "$22", image: require("./productItemsImage/item2.jpg"), category:"shoes"},
          { id: 14, title: "T-shirt", price: "$110", image: require("./productItemsImage/T-shirt2.jpg"), category:"t-shirt"},
          { id: 15, title: "T-shirt", price: "$110", image: require("./productItemsImage/T-shirt4.jpg"), category:"t-shirt"},
        ],
        cart: []
      };
    },
    methods: {
        addToCart(item) {
            this.cart.push(item);
            this.saveCartToLocalStorage();
        },
        saveCartToLocalStorage() {
            localStorage.setItem("cart", JSON.stringify(this.cart));
        },
        filteredItems(category) {
            return this.items.filter(item => item.category.toLowerCase() === category);
        },
        filterByCategory(category){
             const selectedItems = JSON.parse(localStorage.getItem('cart'));
             const filteredItems = selectedItems.filter(item => item.category === category);
             this.items = filteredItems;
        }
    },
    components:{
        ProductItemHelper
    },
}
</script>

<style scoped>
.Product-list {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px;
  align-self: start;
}

.cart{
    grid-column-start: 1;
}

.text-shoes{
    grid-column-start: 2;
    grid-row-start: 1;
}

.sidebar {
  grid-column-start: 1;
  background-color: #fff;
}

.aside-content router-link{
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 28px;
    font-weight: 700;
    color: black;
    margin-bottom: 20px;
}

h2 {
  grid-column: span 2;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  font-weight: 700;
  text-transform: uppercase;
}

.items{
    grid-row-start: 2;
    grid-column-start: 2;
}

.item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
}
</style>
