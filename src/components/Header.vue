<template>
    <header class="header-inner">
        <div class="container"> 
            <nav class="navigation">
                <div class="logo">
                    <a href=""><img src="./HeaderImage/logotype.png" alt=""></a>
                </div>
            
                <div class="text-block">
                    <ul class="header-text_block">
                        <li class="header-text"><a href="" >Home</a></li>
                        <li class="header-text"><a href="">Men</a></li>
                        <li class="header-text"><a href="">Women</a></li>
                        <li class="header-text"><a href="">Trends</a></li>
                        <li class="header-text"><a href="">Collections</a></li>
                        <li class="header-text"><a href="">Sale</a></li>
                        <li class="header-text"><a href="">Blog</a></li>
                    </ul>
                    <a href=""><img src="./HeaderImage/cartImage.svg" alt="SVG Image"></a>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      isCartOpen: false
    };
  },
  methods: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    closeCart() {
      this.isCartOpen = false;
    }
  },
};
</script>

<style>
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