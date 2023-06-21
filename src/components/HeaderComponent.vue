<template>
  <header class="header-inner">
      <div class="container"> 
          <nav class="navigation">
              <div class="logo">
                  <router-link to="/"><img src="./HeaderImage/logotype.png" alt=""></router-link>
              </div>
          
              <div class="text-block">
                  <ul class="header-text_block">
                      <router-link to="/"><li class="header-text"><a href="" >Home</a></li></router-link>
                      <li class="header-text"><a href="">Men</a></li>
                      <li class="header-text"><a href="">Women</a></li>
                      <li class="header-text"><a href="">Trends</a></li>
                      <router-link to="/ProductList"><li class="header-text"><a href="">Collections</a></li></router-link>
                      <li class="header-text"><a href="">Sale</a></li>
                      <li class="header-text"><a href="">Blog</a></li>
                  </ul>
                  <a href=""><img src="./HeaderImage/cartImage.svg" alt="SVG Image" @click.prevent="showDialog"></a>
                  <my-dialog v-model:show="dialogVisible" @close="closeDialog">
                      <CartCompanents/>
                  </my-dialog>
              </div>
          </nav>
      </div>
  </header>
</template>

<script>
import CartCompanents from './CartCompanents'
import MyDialog from './UI/MyDialog.vue';
import ProductItemHelper from './ProductItemHelper.vue';

export default {
components: { MyDialog, ProductItemHelper,CartCompanents },
data() {
  return {
    dialogVisible: false,
    contentDialog: []
  };
},
methods: {
  showDialog(){
    this.dialogVisible = true;
  }, 
}
};
</script>

<style scoped>
header{
    margin-bottom: 100px;
}
.navigation{
    display: flex;
    justify-content: space-between;
    padding-top: 60px;
}

ul li a{
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 700;
    list-style: none;
    color:black;
}

ul li{
  transition: 0.5s all ease;
}

ul li:hover{
  border-bottom: 1px solid #141414;
}

.header-text{
    margin-left: 20px;
    display: inline-block;
}

a{
    text-decoration: none;
}

.text-block{
    display: flex;
    align-items: center;
    gap: 20px;
}

.cart-container {
  position: relative;
}

.cart-sidebar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: #fff;
  transition: right 0.3s ease; 
}

.cart-sidebar-open {
  right: 0; 
}
</style>