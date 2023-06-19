<template>
    <div class="item">
      <img :src="resolveImage()" alt="">
      <div class="product-list_text">
        <h5>{{ item.title }}</h5>
        <h6>{{ item.price }}</h6>
        <button @click="$emit('add-to-cart', item)">Add to cart</button>
      </div>
    </div>
</template>
  
<script>
    export default {
        props: ['item'],
        methods:{
            resolveImage(){
                return this.item.image
            }
        }
    }
</script>

<style scoped>
    .product-list_text{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 263px;
        height: 263px;
        height: auto;
        margin-bottom: 5px;
    }

    h5,h6{
        margin-bottom: 10px;
        text-align: center;
    }

    button {
        background-color: #4caf50;
        color: #fff;
        border: none;
        cursor: pointer;
    }    

    .item{
        text-align: center;
    }
</style>